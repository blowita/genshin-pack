import React, { useCallback, useState } from 'react'

import { TiMinus, TiPlus } from 'react-icons/ti'

import { Buttons, Container, Counter } from './styles'

const requirement = 144

const Resources: React.FC = () => {
  const [counter, setCounter] = useState(0)

  const increment = useCallback(() => setCounter((c) => c + 1), [])
  const decrement = useCallback(() => setCounter((c) => Math.max(c - 1, 0)), [])

  return (
    <Container>
      <Buttons>
        <button onClick={decrement}>
          <TiMinus />
        </button>
        <button onClick={increment}>
          <TiPlus />
        </button>
      </Buttons>
      <Counter>
        <span>
          {counter}/{requirement}
        </span>
      </Counter>
    </Container>
  )
}

export default Resources
