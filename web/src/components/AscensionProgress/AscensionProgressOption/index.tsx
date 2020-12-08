import React, { InputHTMLAttributes } from 'react'

import { ReactComponent as AscensionStar } from '../../../assets/AscensionStar.svg'

import { Container, Tooltip } from './styles'

interface AscensionProgressOptionProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  fulfilled: boolean
}

const AscensionProgressOption: React.FC<AscensionProgressOptionProps> = ({
  label,
  fulfilled,
  ...props
}) => (
  <Container>
    <label>
      <input type="radio" {...props} className="visuallyhidden" />
      <span className="visuallyhidden">{label}</span>
      <AscensionStar className={fulfilled ? 'fulfilled' : ''} />
    </label>
    <Tooltip>{label}</Tooltip>
  </Container>
)

export default AscensionProgressOption
