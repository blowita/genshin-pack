import React, { useCallback, useMemo, useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { TiMinus, TiPlus } from 'react-icons/ti'

import { Buttons, Container, Counter, Filler, Stars } from './styles'

const rarity = 5
const name = `Boreal Wolf's Cracked Tooth (weapon ascension material - rarity ${rarity})`
const requirement = 0

const integerRegexp = /^[0-9]*$/

const Resources: React.FC = () => {
  const [counter, setCounter] = useState(0)
  const [hideButtons, setHideButtons] = useState(true)

  const increment = useCallback(
    () => setCounter((c) => Math.min(c + 1, 9999)),
    []
  )

  const decrement = useCallback(() => setCounter((c) => Math.max(c - 1, 0)), [])

  const changeCounter = useCallback((e) => {
    if (integerRegexp.test(e.target.value)) {
      const input = Number(e.target.value)
      if (input >= 0 && input < 10000) {
        setCounter(input)
      }
    }
  }, [])

  const fulfilled = useMemo(() => {
    return !requirement || counter > requirement
  }, [counter])

  return (
    <Container
      className={'rarity-' + rarity}
      onMouseEnter={() => setHideButtons(false)}
      onMouseLeave={() => setHideButtons(true)}
    >
      <Buttons className={hideButtons ? 'hidden' : ''}>
        <button className="minus" onClick={decrement}>
          <TiMinus />
        </button>
        <button className="plus" onClick={increment}>
          <TiPlus />
        </button>
      </Buttons>
      <Filler />
      <Stars>
        {[...Array(rarity).keys()].map((key) => (
          <FaStar key={key} />
        ))}
      </Stars>
      <Counter>
        <input
          aria-label={`${name} stored amount`}
          value={counter}
          onChange={changeCounter}
          size={3}
        />
        <span>/</span>
        <span
          className={fulfilled ? 'fulfilled' : 'required'}
          aria-label={`${name} required amount`}
        >
          {requirement || '-'}
        </span>
      </Counter>
    </Container>
  )
}

export default Resources
