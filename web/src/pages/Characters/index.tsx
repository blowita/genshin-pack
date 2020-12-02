import React from 'react'

import { CharacterProgress } from '../../components'

import { characters } from '../../data/characters'

import { Container, Content } from './styles'

const Characters: React.FC = () => (
  <Container>
    <Content>
      {characters.map((character, key) => (
        <CharacterProgress character={character} key={key} />
      ))}
    </Content>
  </Container>
)

export default Characters
