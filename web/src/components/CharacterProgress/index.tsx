/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react'

import { Character } from '../../data/characters'

import CharacterAvatar from '../CharacterAvatar'

import {
  CharacterElement,
  CharacterInfo,
  CharacterName,
  CharacterSwitch,
  CharacterWeapon,
  Container,
  Filler,
  LevelProgress,
  Tooltip,
  TopRow,
} from './styles'

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

  const toggleEnabled = useCallback(() => {
    setEnabled((value) => !value)
    character.toggleEnabled()
  }, [character])

  return (
    <Container enabled={enabled}>
      <TopRow>
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
              <CharacterSwitch>
                <input
                  aria-label={`Toggle tracking of ${character.name}`}
                  type="checkbox"
                  checked={enabled}
                  onChange={toggleEnabled}
                />
                <span onMouseDown={toggleEnabled} />
              </CharacterSwitch>
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
              <span className="label">C:</span>
              <span className="ascension">0 / 6 (stars)</span>
              <span className="level">Lv. 1 / 20</span>
            </div>
            <div className="target">
              <span className="label">T:</span>
              <span className="ascension">6 / 6 (stars)</span>
              <span className="level">Lv. 90 / 90</span>
            </div>
          </LevelProgress>
        </div>
      </TopRow>
      <div className="talents">
        <div>
          <span className="label">Auto Attack</span>
          <span className="current">1</span>
          <span className="target">9</span>
        </div>
        <div>
          <span className="label">Elemental Skill</span>
          <span className="current">1</span>
          <span className="target">9</span>
        </div>
        <div>
          <span className="label">Elemental Burst</span>
          <span className="current">1</span>
          <span className="target">9</span>
        </div>
      </div>
    </Container>
  )
}

export default CharacterProgress
