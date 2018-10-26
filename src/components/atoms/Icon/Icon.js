import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// NOTE! All icons used must be manually added at src/index.js

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => color === 'white' && theme.palette.white[0]};
  color: ${({ color, theme }) =>
    color === 'gray' && theme.palette.grayScale[0]};
`

const Icon = ({ color, icon, size }) => (
  <IconStyle color={color} icon={icon} size={size} />
)

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string,
}

export default Icon
