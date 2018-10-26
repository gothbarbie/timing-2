import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TagStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid
    ${({ blue, theme }) =>
      blue ? theme.palette.primary[0] : theme.palette.grayScale[2]};
  background-color: ${({ blue, theme }) =>
    blue ? theme.palette.primary[0] : theme.palette.grayScale[2]};
  color: ${({ theme }) => theme.palette.white[0]};
  outline: none;

  &:focus {
    border: 1px solid
      ${({ blue, theme }) =>
        blue ? theme.palette.white[0] : theme.palette.primary[0]};
    background: ${({ blue, theme }) =>
      blue ? theme.palette.primary[0] : theme.palette.primary[0]};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.white[0]};
  }

  &:active {
    background: ${({ blue, theme }) =>
      blue ? theme.palette.primary[0] : theme.palette.primary[0]};
    border: 1px solid ${({ theme }) => theme.palette.white[0]};
  }
`

const Tag = ({ blue, name, onClick }) => (
  <TagStyle blue={blue} onClick={onClick}>
    {name}
  </TagStyle>
)

Tag.propTypes = {
  blue: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Tag
