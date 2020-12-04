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

  const [lockCheckmarks, setLockCheckmarks] = useState(false)

  const toggleHideUnchecked = useCallback(
    () => setHideUnchecked((value) => !value),
    []
  )

  const toggleLockCheckmarks = useCallback(
    () => setLockCheckmarks((value) => !value),
    []
  )

  return (
    <Container>
      <Controls>
        <div>
          <input
            id="filter-checkmarks"
            type="checkbox"
            checked={hideUnchecked}
            onChange={toggleHideUnchecked}
          />
          <label htmlFor="filter-checkmarks">
            Show only characters you marked
          </label>
        </div>
        <div>
          <input
            id="lock-checkmarks"
            type="checkbox"
            checked={lockCheckmarks}
            onChange={toggleLockCheckmarks}
          />
          <label htmlFor="lock-checkmarks">Lock checkmarks</label>
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
                showSwitch={!lockCheckmarks}
                key={key}
              />
            )
        )}
      </Content>
    </Container>
  )
}

export default Characters
