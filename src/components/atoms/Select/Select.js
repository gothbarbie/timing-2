import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Option = styled.option``
const SelectStyle = styled.select`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.grayScale[2]};
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.palette.grayScale[0]};
  appearance: none;
  line-height: normal;
  outline: none;
  position: relative;
  background-color: ${({ theme }) => theme.palette.white[2]};
  background-position: right 1rem top 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDA1LjQ1NiA0MDUuNDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDUuNDU2IDQwNS40NTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4NCjxnPg0KCTxwYXRoIGQ9Ik03NC4xMzQsNjQuMTQ3Yy00Ljk4NSwwLjA3OC05LjkxMSwyLjE2My0xMy40MzgsNS42ODhsLTU1LDU1QzIuMDk2LDEyOC40MzIsMCwxMzMuNDkyLDAsMTM4LjU4MyAgIHMyLjA5NiwxMC4xNTEsNS42OTcsMTMuNzVsMTgzLjI4MSwxODMuMjgxYzMuNTk5LDMuNjAxLDguNjU5LDUuNjk3LDEzLjc1LDUuNjk3czEwLjE1MS0yLjA5NiwxMy43NS01LjY5N2wxODMuMjgxLTE4My4yODEgICBjMy42MDEtMy41OTksNS42OTctOC42NTksNS42OTctMTMuNzVzLTIuMDk2LTEwLjE1MS01LjY5Ny0xMy43NWwtNTUtNTVjLTMuNTk4LTMuNTkxLTguNjUxLTUuNjgxLTEzLjczNC01LjY4MSAgIGMtNS4wODMsMC0xMC4xMzYsMi4wOS0xMy43MzQsNS42ODFMMjAyLjcyOCwxODQuMzk3TDg4LjE2Niw2OS44MzNDODQuNDk5LDY2LjE2OSw3OS4zMTgsNjQuMDcsNzQuMTM0LDY0LjE0N0w3NC4xMzQsNjQuMTQ3eiIgZmlsbD0iIzk2OTY5NiIvPg0KPC9nPg0KPC9zdmc+DQo=);

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary[0]};
  }
`

const Select = ({ name, onChange, options }) => (
  <SelectStyle onChange={onChange} name={name}>
    {options.map(obj => (
      <Option key={obj.key} value={obj.value}>
        {obj.value}
      </Option>
    ))}
  </SelectStyle>
)

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
}

export default Select
