import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement>

const ToggleSwitch: React.FC<ToggleSwitchProps> = (props) => (
  <Container>
    <label>
      <input {...props} type="checkbox" className="visuallyhidden" />
      <span />
    </label>
  </Container>
)

export default ToggleSwitch
