import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

const LabeledInputStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelStyled = styled(Label)`
  margin-bottom: 1rem;
`

const LabeledInput = ({ name, label, onChange, type }) => (
  <LabeledInputStyle>
    <LabelStyled htmlFor={name}>{label}</LabelStyled>
    <Input name={name} onChange={onChange} type={type} />
  </LabeledInputStyle>
)

LabeledInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default LabeledInput
