import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyle = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.grayScale[0]};
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.palette.grayScale[0]};
  outline: none;

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary[0]};
  }
`

const Input = ({ name, onChange, type = 'text' }) => {
  return <InputStyle name={name} onChange={onChange} type={type} />
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default Input
