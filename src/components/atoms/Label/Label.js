import styled from 'styled-components'

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.grayScale[1]};
`

export default Label
