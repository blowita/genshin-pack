import React, { useCallback, useMemo } from 'react'

import { Container } from './styles'

import Option from './AscensionProgressOption'

const values = [...Array(6).keys()]

interface AscensionProgressProps {
  fieldsetName: string
  legend: string
  value: number
  onChange: (value: number) => void
  disabled: boolean
}

const AscensionProgress: React.FC<AscensionProgressProps> = ({
  fieldsetName,
  legend,
  value,
  onChange,
  disabled,
}) => {
  const groupName = useMemo(() => {
    return 'ascension-progress-'.concat(
      fieldsetName.toLowerCase().replace(/\s+/g, '')
    )
  }, [fieldsetName])

  const changeProgress = useCallback(
    (v: number) => {
      console.log(v)
      // TODO: ask about resource consumption on ascension,
      //       alert about going back on ascensions (mostly for keyboard usage);
      //       both will likely be done in external setValue:
      onChange(v)
    },
    [onChange]
  )

  return (
    <Container disabled={disabled}>
      <legend className="visuallyhidden">{legend}</legend>
      <Option
        label="Unascended"
        name={groupName}
        value={0}
        onChange={() => changeProgress(0)}
        defaultChecked={value === 0}
        fulfilled
      />
      {values.map((v) => (
        <Option
          label={`Ascension ${v + 1}`}
          name={groupName}
          value={v + 1}
          onChange={() => changeProgress(v + 1)}
          defaultChecked={value === v + 1}
          fulfilled={v + 1 <= value}
          key={v}
        />
      ))}
    </Container>
  )
}

export default AscensionProgress
