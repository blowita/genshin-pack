import React, { useCallback, useState } from 'react'

import { FaForward } from 'react-icons/fa'

import { Character } from '../../data/characters'

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
  Tooltip,
} from './styles'

const ascensionLimits = [20, 40, 50, 60, 70, 80, 90]

interface CharacterProgressProps {
  character: Character & {
    enabled: boolean
    toggleEnabled: () => void
  }
  showSwitch: boolean
  lockAscension: boolean
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({
  character,
  showSwitch,
  lockAscension,
}) => {
  const [enabled, setEnabled] = useState(character.enabled)

  const [ascensionProgress, setAscensionProgress] = useState(0)
  const [desiredAscensionProgress, setDesiredAscensionProgress] = useState(0)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [desiredLevel, setDesiredLevel] = useState(1)

  const toggleEnabled = useCallback(() => {
    setEnabled((value) => !value)
    character.toggleEnabled()
  }, [character])

  const changeAscensionProgress = useCallback((v: number) => {
    setAscensionProgress(v)
    setDesiredAscensionProgress((d) => Math.max(d, v))
  }, [])

  return (
    <Container enabled={enabled}>
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        {showSwitch && (
          <ToggleSwitch
            aria-label={`Toggle tracking of ${character.name}`}
            checked={enabled}
            onChange={toggleEnabled}
          />
        )}
        <Filler />
        <CharacterElement element={character.element}>
          <Tooltip>{character.element}</Tooltip>
        </CharacterElement>
        <CharacterWeapon weapon={character.weapon}>
          <Tooltip>{character.weapon}</Tooltip>
        </CharacterWeapon>
      </CharacterInfo>
      <Avatar enabled={enabled}>
        <CharacterAvatar
          characterImageUrl={character.imageUrl}
          characterRarity={character.rarity}
        />
      </Avatar>
      <LevelProgress>
        <legend>Ascension/Level</legend>
        <div>
          <span className="label">Current:</span>
          <AscensionProgress
            fieldsetName={`current-${character.name}`}
            legend={`${character.name}'s current ascension progress:`}
            value={ascensionProgress}
            onChange={changeAscensionProgress}
            disabled={!enabled || lockAscension}
          />
          <span>Lv.</span>
          <input
            aria-label={`${character.name}'s current level`}
            type="number"
            min="1"
            max={ascensionLimits[ascensionProgress]}
            step="1"
            value={currentLevel}
            onChange={(e) => setCurrentLevel(Number(e.target.value))}
            disabled={!enabled}
          />
          <Filler />
          <span>/{ascensionLimits[ascensionProgress]}</span>
        </div>
        <div>
          <span className="label">Desired:</span>
          <AscensionProgress
            fieldsetName={`desired-${character.name}`}
            legend={`${character.name}'s desired ascension progress:`}
            value={desiredAscensionProgress}
            onChange={setDesiredAscensionProgress}
            disabled={!enabled || lockAscension}
          />
          <span>Lv.</span>
          <input
            aria-label={`${character.name}'s desired level`}
            type="number"
            min="1"
            max={ascensionLimits[desiredAscensionProgress]}
            step="1"
            value={desiredLevel}
            onChange={(e) => setDesiredLevel(Number(e.target.value))}
            disabled={!enabled}
          />
          <Filler />
          <span>/{ascensionLimits[desiredAscensionProgress]}</span>
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
            disabled={!enabled}
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
            disabled={!enabled}
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
            disabled={!enabled}
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
            disabled={!enabled}
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
            disabled={!enabled}
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
            disabled={!enabled}
          />
        </div>
      </Talents>
    </Container>
  )
}

export default CharacterProgress
