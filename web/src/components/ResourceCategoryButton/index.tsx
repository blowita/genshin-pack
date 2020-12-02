import React, { ButtonHTMLAttributes } from 'react'

import { Button, Container, Tooltip } from './styles'

interface ResourceCategoryButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  tooltip: string
  selected: boolean
}

const ResourceCategoryButton: React.FC<ResourceCategoryButton> = ({
  children,
  tooltip,
  ...props
}) => (
  <Container>
    <Button {...props}>{children}</Button>
    <Tooltip>{tooltip}</Tooltip>
  </Container>
)

export default ResourceCategoryButton
