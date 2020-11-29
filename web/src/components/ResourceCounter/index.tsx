import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { TiMinus, TiPlus } from 'react-icons/ti'

import { Resource } from '../../data/resources'

import { Buttons, Container, Counter, Cover, Filler, Stars } from './styles'

const integerRegexp = /^[0-9]*$/

type ResourceCounterProps = {
  resource: Resource
  count?: number
  setCount: (count: number) => void
  target?: number
}

const Resources: React.FC<ResourceCounterProps> = ({
  resource,
  count,
  setCount,
  target,
}) => {
  const [counter, setCounter] = useState(count || 0)
  const [hideButtons, setHideButtons] = useState(true)

  const name = `${resource.name} (${resource.type} - rarity ${resource.rarity})`

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
      onMouseEnter={() => setHideButtons(false)}
      onMouseLeave={() => setHideButtons(true)}
    >
      <Cover
        className={'rarity-' + resource.rarity}
        resourceUrl={resource.imageUrl}
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
          {[...Array(resource.rarity).keys()].map((key) => (
            <FaStar key={key} />
          ))}
        </Stars>
      </Cover>
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
