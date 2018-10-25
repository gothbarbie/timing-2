import React from 'react'
import styled from 'styled-components'

import Icon from 'generic/atoms/Icon/Icon'

const NavButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 3rem;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.gray};
  }
`

const NavButton = ({ direction = 'left', onClick, title }) => (
  <NavButtonStyle onClick={onClick} title={title}>
    {direction === 'left' && <Icon icon={['fas', 'arrow-circle-left']} />}
    {direction === 'right' && <Icon icon={['fas', 'arrow-circle-right']} />}
  </NavButtonStyle>
)

export default NavButton
