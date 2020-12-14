import React, { useCallback } from 'react'

import { FaAngleDoubleDown, FaForward } from 'react-icons/fa'

import { characterStore } from '../../entities'

import AscensionProgress from '../AscensionProgress'
import CharacterAvatar from '../CharacterAvatar'
import ToggleSwitch from '../ToggleSwitch'

import {
  Avatar,
  CharacterElement,
  CharacterInfo,
  CharacterName,
  CharacterWeapon,
  Container,
  Filler,
  LevelProgress,
  Talents,
} from './styles'

const ascensionLimits = [20, 40, 50, 60, 70, 80, 90]

const isLevel = /^[1-9][0-9]*$/

interface CharacterProgressProps {
  characterName: string
  showSwitch: boolean
  lockAscension: boolean
  lockDesired: boolean
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({
  characterName,
  showSwitch,
  lockAscension,
  lockDesired,
}) => {
  const character = characterStore.useEntityValue(characterName)

  const patchCharacter = characterStore.usePatchEntity(characterName)

  const toggleEnabled = useCallback(() => {
    patchCharacter({ enabled: !character.enabled })
  }, [character, patchCharacter])

  const changeAscensionProgress = useCallback(
    (current: number) => {
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
    (desired: number) => {
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
        {showSwitch && (
          <ToggleSwitch
            aria-label={`Toggle tracking of ${character.name}`}
            checked={character.enabled}
            onChange={toggleEnabled}
          />
        )}
        <Filler />
        <CharacterElement data-title={character.element}>
          <span className="visuallyhidden">{character.element}</span>
        </CharacterElement>
        <CharacterWeapon data-title={character.weapon}>
          <span className="visuallyhidden">{character.weapon}</span>
        </CharacterWeapon>
      </CharacterInfo>
      <Avatar enabled={character.enabled}>
        <CharacterAvatar
          characterImageUrl={character.imageUrl}
          characterRarity={character.rarity}
        />
      </Avatar>
      <LevelProgress>
        <legend>Ascension/Level</legend>
        <div>
          <AscensionProgress
            fieldsetName={`current-${character.name}`}
            legend={`${character.name}'s current ascension progress:`}
            value={character.ascension.current}
            onChange={changeAscensionProgress}
            disabled={!character.enabled || lockAscension}
          />
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
          <AscensionProgress
            fieldsetName={`desired-${character.name}`}
            legend={`${character.name}'s desired ascension progress:`}
            value={character.ascension.desired}
            onChange={changeDesiredAscensionProgress}
            disabled={!character.enabled || lockAscension || lockDesired}
          />
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
