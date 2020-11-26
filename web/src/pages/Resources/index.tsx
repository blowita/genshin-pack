import React from 'react'

import Counter from '../../components/ResourceCounter'

import { Container, Content } from './styles'

const Resources: React.FC = () => (
  <Container>
    <Content>
      <Counter />
    </Content>
  </Container>
)

export default Resources
