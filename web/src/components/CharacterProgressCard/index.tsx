import React, { useCallback } from 'react'

import { FaAngleDoubleDown, FaForward } from 'react-icons/fa'
import { useRecoilValue } from 'recoil'

import { ReactComponent as AscensionStar } from '../../assets/AscensionStar.svg'

import { characterStore } from '../../recoil/entities'

import {
  lockAscensionsCheckbox,
  lockCharactersCheckbox,
  lockDesiredCheckbox,
} from '../../recoil/controls/CharactersPage'

import CharacterAvatar from '../CharacterAvatar'

import {
  Avatar,
  AscensionProgressFieldset,
  CharacterElement,
  CharacterInfo,
  CharacterName,
  CharacterToggle,
  CharacterWeapon,
  Container,
  Filler,
  LevelProgress,
  Talents,
} from './styles'

const ascensionLimits = [20, 40, 50, 60, 70, 80, 90]

const isLevel = /^[1-9][0-9]*$/

interface CharacterProgressProps {
  characterId: string
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({
  characterId,
}) => {
  const character = characterStore.useEntityValue(characterId)
  const patchCharacter = characterStore.usePatchEntity(characterId)

  const lockAscension = useRecoilValue(lockAscensionsCheckbox)
  const lockCharacter = useRecoilValue(lockCharactersCheckbox)
  const lockDesired = useRecoilValue(lockDesiredCheckbox)

  const toggleEnabled = useCallback(() => {
    patchCharacter({ enabled: !character.enabled })
  }, [character, patchCharacter])

  const changeAscensionProgress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const current = Number(event.target.value)
      patchCharacter({
        ascension: {
          current,
          desired: Math.max(current, character.ascension.desired),
        },
      })
    },
    [character, patchCharacter]
  )

  const changeDesiredAscensionProgress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const desired = Number(event.target.value)
      patchCharacter({
        ascension: {
          ...character.ascension,
          desired: Math.max(character.ascension.current, desired),
        },
      })
    },
    [character, patchCharacter]
  )

  const changeCurrentLevel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isLevel.test(event.target.value)) {
        const current = Number(event.target.value)
        patchCharacter({
          level: {
            current: Math.min(
              current,
              ascensionLimits[character.ascension.current],
              90
            ),
            desired: Math.min(Math.max(current, character.level.desired), 90),
          },
        })
      }
    },
    [character, patchCharacter]
  )

  const changeDesiredLevel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isLevel.test(event.target.value)) {
        const desired = Number(event.target.value)
        patchCharacter({
          level: {
            ...character.level,
            desired: Math.min(
              Math.max(character.level.current, desired),
              ascensionLimits[character.ascension.desired],
              90
            ),
          },
        })
      }
    },
    [character, patchCharacter]
  )

  return (
    <Container enabled={character.enabled}>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterToggle>
          <input
            aria-label={`Toggle tracking of ${character.name}`}
            type="checkbox"
            checked={character.enabled}
            onChange={toggleEnabled}
            className="visuallyhidden"
            disabled={lockCharacter}
          />
          <span />
        </CharacterToggle>
        <Filler />
        <CharacterElement data-title={character.element}>
          <span className="visuallyhidden">{character.element}</span>
        </CharacterElement>
        <CharacterWeapon data-title={character.weapon}>
          <span className="visuallyhidden">{character.weapon}</span>
        </CharacterWeapon>
      </CharacterInfo>
      <Avatar enabled={character.enabled}>
        <CharacterAvatar characterId={character.id} />
      </Avatar>
      <LevelProgress>
        <legend>Ascension/Level</legend>
        <div>
          <AscensionProgressFieldset
            disabled={!character.enabled || lockAscension}
          >
            <legend className="visuallyhidden">{`${character.name}'s current ascension:`}</legend>
            <label data-title="Unascended">
              <input
                type="radio"
                name={`ascension-progress-current-${character.name}`}
                value={0}
                checked={character.ascension.current === 0}
                onChange={changeAscensionProgress}
                className="visuallyhidden"
              />
              <span className="visuallyhidden">Unascended</span>
              <AscensionStar className="fulfilled" />
            </label>
            {[...Array(6).keys()].map((v) => (
              <label data-title={`Ascension ${v + 1}`} key={v}>
                <input
                  type="radio"
                  name={`ascension-progress-current-${character.name}`}
                  value={v + 1}
                  checked={character.ascension.current === v + 1}
                  onChange={changeAscensionProgress}
                  className="visuallyhidden"
                />
                <span className="visuallyhidden">{`Ascension ${v + 1}`}</span>
                <AscensionStar
                  className={
                    character.ascension.current >= v + 1 ? 'fulfilled' : ''
                  }
                />
              </label>
            ))}
          </AscensionProgressFieldset>
          <div>
            <span>Lv.</span>
            <input
              aria-label={`${character.name}'s current level`}
              type="number"
              min="1"
              max={ascensionLimits[character.ascension.current]}
              step="1"
              value={character.level.current}
              onChange={changeCurrentLevel}
              disabled={!character.enabled}
            />
            <span>/{ascensionLimits[character.ascension.current]}</span>
          </div>
        </div>
        <span>
          <FaAngleDoubleDown />
        </span>
        <div>
          <AscensionProgressFieldset
            disabled={!character.enabled || lockAscension || lockDesired}
          >
            <legend className="visuallyhidden">{`${character.name}'s desired ascension:`}</legend>
            <label data-title="Unascended">
              <input
                type="radio"
                name={`ascension-progress-desired-${character.name}`}
                value={0}
                checked={character.ascension.desired === 0}
                onChange={changeDesiredAscensionProgress}
                disabled={character.ascension.current > 0}
                className="visuallyhidden"
              />
              <span className="visuallyhidden">Unascended</span>
              <AscensionStar className="fulfilled" />
            </label>
            {[...Array(6).keys()].map((v) => (
              <label data-title={`Ascension ${v + 1}`} key={v}>
                <input
                  type="radio"
                  name={`ascension-progress-desired-${character.name}`}
                  value={v + 1}
                  checked={character.ascension.desired === v + 1}
                  onChange={changeDesiredAscensionProgress}
                  disabled={character.ascension.current > v + 1}
                  className="visuallyhidden"
                />
                <span className="visuallyhidden">{`Ascension ${v + 1}`}</span>
                <AscensionStar
                  className={
                    character.ascension.desired >= v + 1 ? 'fulfilled' : ''
                  }
                />
              </label>
            ))}
          </AscensionProgressFieldset>
          <div>
            <span>Lv.</span>
            <input
              aria-label={`${character.name}'s desired level`}
              type="number"
              min="1"
              max={ascensionLimits[character.ascension.desired]}
              step="1"
              value={character.level.desired}
              onChange={changeDesiredLevel}
              disabled={!character.enabled || lockDesired}
            />
            <span>/{ascensionLimits[character.ascension.desired]}</span>
          </div>
        </div>
      </LevelProgress>
      <Talents>
        <legend>Talents</legend>
        <div>
          <span>Attack</span>
          <input
            aria-label={`${character.name}'s attack talent current level`}
            type="number"
            min="1"
            max="10"
            step="1"
            defaultValue={6}
            disabled={!character.enabled}
          />
          <span>
            <FaForward />
          </span>
          <input
            aria-label={`${character.name}'s attack talent desired level`}
            type="number"
            min="1"
            max="10"
            step="1"
            defaultValue={8}
            disabled={!character.enabled || lockDesired}
          />
        </div>
        <div>
          <span>Skill</span>
          <input
            aria-label={`${character.name}'s elemental skill talent current level`}
            type="number"
            min="1"
            max="10"
            step="1"
            defaultValue={6}
            disabled={!character.enabled}
          />
          <span>
            <FaForward />
          </span>
          <input
            aria-label={`${character.name}'s elemental skill talent desired level`}
            type="number"
            min="1"
            max="10"
            step="1"
            defaultValue={8}
            disabled={!character.enabled || lockDesired}
          />
        </div>
        <div>
          <span>Burst</span>
          <input
            aria-label={`${character.name}'s elemental burst talent current level`}
            type="number"
            min="1"
            max="10"
            step="1"
            defaultValue={6}
            disabled={!character.enabled}
          />
          <span>
            <FaForward />
          </span>
          <input
            aria-label={`${character.name}'s elemental burst talent desired level`}
            type="number"
            min="1"
            max="10"
            step="1"
            defaultValue={8}
            disabled={!character.enabled || lockDesired}
          />
        </div>
      </Talents>
    </Container>
  )
}

export default CharacterProgress
