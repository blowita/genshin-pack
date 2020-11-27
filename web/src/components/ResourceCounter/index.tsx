import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { TiMinus, TiPlus } from 'react-icons/ti'

import { Buttons, Container, Counter, Filler, Stars } from './styles'

const integerRegexp = /^[0-9]*$/

type ResourceCounterItem = {
  name: string
  type: string
  rarity: number
  imageUrl: string
}

type ResourceCounterProps = {
  item: ResourceCounterItem
  count?: number
  setCount: (count: number) => void
  target?: number
}

const Resources: React.FC<ResourceCounterProps> = ({
  item,
  count,
  setCount,
  target,
}) => {
  const [counter, setCounter] = useState(count || 0)
  const [hideButtons, setHideButtons] = useState(true)

  const name = `${item.name} (${item.type} - rarity ${item.rarity})`

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
    return !target || counter > target
  }, [counter, target])

  useEffect(() => {
    setCount(counter)
  }, [counter, setCount])

  return (
    <Container
      className={'rarity-' + item.rarity}
      resourceUrl={item.imageUrl}
      onMouseEnter={() => setHideButtons(false)}
      onMouseLeave={() => setHideButtons(true)}
    >
      <Buttons className={hideButtons ? 'hidden' : ''}>
        <button
          className="minus"
          onClick={decrement}
          aria-label={`Decrement ${name} stored amount`}
        >
          <TiMinus />
        </button>
        <button
          className="plus"
          onClick={increment}
          aria-label={`Increment ${name} stored amount`}
        >
          <TiPlus />
        </button>
      </Buttons>
      <Filler />
      <Stars>
        {[...Array(item.rarity).keys()].map((key) => (
          <FaStar key={key} />
        ))}
      </Stars>
      <Counter>
        <input
          value={counter}
          onChange={changeCounter}
          size={3}
          aria-label={`${name} stored amount`}
        />
        <span>/</span>
        <span
          className={fulfilled ? 'fulfilled' : 'required'}
          aria-label={`${name} required amount`}
        >
          {target || '-'}
        </span>
      </Counter>
    </Container>
  )
}

export default Resources
