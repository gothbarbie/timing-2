import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonStyle = styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'none')};
  color: ${({ color, theme }) => color === 'primary' && theme.colors.primary};
  color: ${({ color, theme }) => color === 'white' && theme.colors.white};
  color: ${({ color, theme }) => color === 'gray' && theme.colors.gray};

  &:active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme, hoverColor }) =>
      hoverColor === 'gray' && theme.colors.gray};
  }
`

// NOTE! All icons used must be manually added at src/index.js
const IconButton = ({ color, hoverColor, icon, size = 'lg', onClick }) => (
  <ButtonStyle color={color} hoverColor={hoverColor} onClick={onClick}>
    <FontAwesomeIcon icon={icon} size={size} />
  </ButtonStyle>
)

export default IconButton
