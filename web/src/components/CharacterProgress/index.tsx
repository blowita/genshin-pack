import React, { useCallback, useState } from 'react'

import { Character } from '../../data/characters'
import AscensionProgress from '../AscensionProgress'

import CharacterAvatar from '../CharacterAvatar'
import ToggleSwitch from '../ToggleSwitch'

import {
  CharacterElement,
  CharacterInfo,
  CharacterName,
  CharacterWeapon,
  Container,
  Filler,
  LevelProgress,
  Tooltip,
  TopRow,
} from './styles'

const ascensionLimits = [20, 40, 50, 60, 70, 80, 90]

interface CharacterProgressProps {
  character: Character & {
    enabled: boolean
    toggleEnabled: () => void
  }
  showSwitch: boolean
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({
  character,
  showSwitch,
}) => {
  const [enabled, setEnabled] = useState(character.enabled)

  const [ascensionProgress, setAscensionProgress] = useState(0)
  const [desiredAscensionProgress, setDesiredAscensionProgress] = useState(0)
  const [currentLevel] = useState(1)
  const [desiredLevel] = useState(1)

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
      <TopRow enabled={enabled}>
        <div>
          <CharacterAvatar
            characterImageUrl={character.imageUrl}
            characterRarity={character.rarity}
          />
        </div>
        <div>
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
          <LevelProgress>
            <div className="current">
              <span className="label">Now:</span>
              <AscensionProgress
                fieldsetName={`current-${character.name}`}
                legend={`${character.name}'s current ascension progress:`}
                value={ascensionProgress}
                onChange={changeAscensionProgress}
                disabled={!enabled}
              />
              <span className="level">
                Lv. {currentLevel}/{ascensionLimits[ascensionProgress]}
              </span>
            </div>
            <div className="target">
              <span className="label">Plan:</span>
              <AscensionProgress
                fieldsetName={`desired-${character.name}`}
                legend={`${character.name}'s desired ascension progress:`}
                value={desiredAscensionProgress}
                onChange={setDesiredAscensionProgress}
                disabled={!enabled}
              />
              <span className="level">
                Lv. {desiredLevel}/{ascensionLimits[desiredAscensionProgress]}
              </span>
            </div>
          </LevelProgress>
        </div>
      </TopRow>
      <div className="talents">
        <div>
          <span className="label">Attack</span>
          <span className="current">1</span>
          <span> &gt; </span>
          <span className="target">9</span>
        </div>
        <div>
          <span className="label">Skill</span>
          <span className="current">1</span>
          <span> &gt; </span>
          <span className="target">9</span>
        </div>
        <div>
          <span className="label">Burst</span>
          <span className="current">1</span>
          <span> &gt; </span>
          <span className="target">9</span>
        </div>
      </div>
    </Container>
  )
}

export default CharacterProgress
