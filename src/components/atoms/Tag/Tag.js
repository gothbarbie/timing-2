import React from 'react'
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
    ${({ blue, theme }) => (blue ? theme.colors.primary : theme.colors.gray)};
  background-color: ${({ blue, theme }) =>
    blue ? theme.colors.primary : theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  outline: none;

  &:focus {
    border: 1px solid
      ${({ blue, theme }) => (blue ? theme.colors.white : theme.colors.primary)};
    background: ${({ blue, theme }) =>
      blue ? theme.colors.primary : theme.colors.primary};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:active {
    background: ${({ blue, theme }) =>
      blue ? theme.colors.primary : theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`

const Tag = ({ blue, name, onClick }) => (
  <TagStyle blue={blue} onClick={onClick}>
    {name}
  </TagStyle>
)

export default Tag
