import React from 'react'

import { Character } from '../../data/characters'

import CharacterAvatar from '../CharacterAvatar'

import { Container, LevelProgress } from './styles'

interface CharacterProgressProps {
  character: Character
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({ character }) => {
  return (
    <Container>
      <CharacterAvatar
        characterImageUrl={character.imageUrl}
        characterRarity={character.rarity}
      />
      <LevelProgress>
        <div className="switch">
          <span className="name">{character.name}</span>
          <input type="checkbox" />
          <span className="element">{character.element}</span>
          <span className="weapon">{character.weapon}</span>
        </div>
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
