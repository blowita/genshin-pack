import React from 'react'

import RarityDisplay from '../RarityDisplay'

import { Container } from './styles'

interface CharacterAvatarProps {
  characterImageUrl: string
  characterRarity: number
}

const CharacterAvatar: React.FC<CharacterAvatarProps> = (props) => (
  <Container {...props}>
    <RarityDisplay rarity={props.characterRarity} />
  </Container>
)

export default CharacterAvatar
