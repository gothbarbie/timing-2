import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from '../../atoms/Label'
import Select from '../../atoms/Select'

const LabeledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelStyled = styled(Label)`
  margin-bottom: 1rem;
`

const LabeledSelect = ({ label, name, onChange, options }) => (
  <LabeledSelectWrapper>
    <LabelStyled htmlFor={name}>{label}</LabelStyled>
    <Select name={name} onChange={onChange} options={options} />
  </LabeledSelectWrapper>
)

LabeledSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      name: PropTypes.any.isRequired,
    }).isRequired
  ).isRequired,
}

export default LabeledSelect
