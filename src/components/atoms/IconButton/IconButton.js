import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonStyle = styled.button`
  padding: 0;
  margin: 0;
  outline: none;
  background-color: transparent;
  border: none;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'none')};
  color: ${({ color, theme }) =>
    color === 'primary' && theme.palette.primary[0]};
  color: ${({ color, theme }) => color === 'white' && theme.palette.white[0]};
  color: ${({ color, theme }) =>
    color === 'gray' && theme.palette.grayScale[2]};

  &:active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary[0]};
    color: ${({ theme, hoverColor }) =>
      hoverColor === 'gray' && theme.palette.grayScale[2]};
  }
`

// NOTE! All icons used must be manually added at src/index.js
const IconButton = ({ color, hoverColor, icon, size = 'lg', onClick }) => (
  <ButtonStyle color={color} hoverColor={hoverColor} onClick={onClick}>
    <FontAwesomeIcon icon={icon} size={size} />
  </ButtonStyle>
)

IconButton.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
}

export default IconButton
