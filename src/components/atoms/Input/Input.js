import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.dark};
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

const Input = ({ name, onChange, type = 'text' }) => {
  return <InputStyle name={name} onChange={onChange} type={type} />
}

export default Input
