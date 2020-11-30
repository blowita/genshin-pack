import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { FaStar } from 'react-icons/fa'

import { resources } from '../../data/resources'

import { Container, Counter, Cover, Filler, Stars } from './styles'

const resource = resources.find((item) => item.name === 'Mora')

const integerRegexp = /^[0-9]*$/

type MoraCounterProps = {
  count?: number
  setCount: (count: number) => void
  target?: number
}

const MoraCounter: React.FC<MoraCounterProps> = ({
  count,
  setCount,
  target,
}) => {
  const [counter, setCounter] = useState(count || 0)

  const name = `Mora`

  const changeCounter = useCallback((e) => {
    if (integerRegexp.test(e.target.value)) {
      const input = Number(e.target.value)
      if (input >= 0 && input < 1000000000) {
        setCounter(input)
      }
    }
  }, [])

  const fulfilled = useMemo(() => {
    return !target || counter >= target
  }, [counter, target])

  useEffect(() => {
    setCount(counter)
  }, [counter, setCount])

  return (
    <Container>
      <Cover
        className={'rarity-' + resource?.rarity}
        resourceUrl={resource ? resource.imageUrl : ''}
      >
        <Filler />
        <Stars>
          {[...Array(resource?.rarity).keys()].map((key) => (
            <FaStar key={key} />
          ))}
        </Stars>
      </Cover>
      <Counter>
        <input
          value={counter}
          onChange={changeCounter}
          size={7}
          aria-label={`${name} stored amount`}
        />
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

export default MoraCounter
