import React, { useCallback, useState } from 'react'

import { CharacterProgress } from '../../components'

import { characters } from '../../data/characters'

import { Container, Content, Controls } from './styles'

const enabled = characters.map((character) => ({
  name: character.name,
  enabled: false,
}))

const Characters: React.FC = () => {
  const [hideUnchecked, setHideUnchecked] = useState(false)
  const [lockCharacters, setLockCharacters] = useState(false)
  const [lockAscensions, setLockAscensions] = useState(false)

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
      </Controls>
      <Content>
        {characters.map(
          (character, key) =>
            (!hideUnchecked || enabled[key].enabled) && (
              <CharacterProgress
                character={{
                  ...character,
                  enabled: enabled[key].enabled,
                  toggleEnabled: () => {
                    enabled[key].enabled = !enabled[key].enabled
                  },
                }}
                showSwitch={!lockCharacters}
                lockAscension={lockAscensions}
                key={key}
              />
            )
        )}
      </Content>
    </Container>
  )
}

export default Characters
