import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// NOTE! All icons used must be manually added at src/index.js

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => color === 'white' && theme.colors.white};
  color: ${({ color, theme }) => color === 'gray' && theme.colors.gray};
`

const Icon = ({ color, icon, size }) => (
  <IconStyle color={color} icon={icon} size={size} />
)

export default Icon
