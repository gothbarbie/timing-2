import React from 'react'
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

export default LabeledInput
