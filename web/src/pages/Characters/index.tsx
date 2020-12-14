import React, { useCallback, useState } from 'react'

import { CharacterProgress } from '../../components'

import { characters } from '../../data/characters'

import { characterStore } from '../../entities'

import { Container, Content, Controls } from './styles'

const Characters: React.FC = () => {
  const characterList = characterStore.useEntityList(
    characters.map((c) => c.name)
  )

  const [hideUnchecked, setHideUnchecked] = useState(false)
  const [lockCharacters, setLockCharacters] = useState(false)
  const [lockAscensions, setLockAscensions] = useState(false)
  const [lockDesired, setLockDesired] = useState(false)

  const toggleHideUnchecked = useCallback(
    () => setHideUnchecked((value) => !value),
    []
  )

  const toggleLockCharacters = useCallback(
    () => setLockCharacters((value) => !value),
    []
  )

  const toggleLockAscensions = useCallback(
    () => setLockAscensions((value) => !value),
    []
  )

  const toggleLockDesired = useCallback(
    () => setLockDesired((value) => !value),
    []
  )

  return (
    <Container>
      <Controls>
        <div>
          <input
            id="filter-characters"
            type="checkbox"
            checked={hideUnchecked}
            onChange={toggleHideUnchecked}
          />
          <label htmlFor="filter-characters">
            Show only characters you marked
          </label>
        </div>
        <div>
          <input
            id="lock-characters"
            type="checkbox"
            checked={lockCharacters}
            onChange={toggleLockCharacters}
          />
          <label htmlFor="lock-characters">Lock characters</label>
        </div>
        <div>
          <input
            id="lock-ascensions"
            type="checkbox"
            checked={lockAscensions}
            onChange={toggleLockAscensions}
          />
          <label htmlFor="lock-ascensions">Lock ascensions</label>
        </div>
        <div>
          <input
            id="lock-desired"
            type="checkbox"
            checked={lockDesired}
            onChange={toggleLockDesired}
          />
          <label htmlFor="lock-desired">Lock desired</label>
        </div>
      </Controls>
      <Content>
        {characterList.map(
          (character, key) =>
            (!hideUnchecked || character.enabled) && (
              <CharacterProgress
                characterName={character.name}
                showSwitch={!lockCharacters}
                lockAscension={lockAscensions}
                lockDesired={lockDesired}
                key={key}
              />
            )
        )}
      </Content>
    </Container>
  )
}

export default Characters
