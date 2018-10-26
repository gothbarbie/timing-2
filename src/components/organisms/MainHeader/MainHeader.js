import React from 'react'
import styled from 'styled-components'

const MainHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.primary[0]};
  color: ${({ theme }) => theme.palette.white[0]};
  padding: 1rem 0;
`

const MaxWidth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`

const Logo = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  margin: 0;
`

const Username = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
`

const MainHeader = () => (
  <MainHeaderStyle>
    <MaxWidth>
      <Logo>Timing</Logo> <Username>Username</Username>
    </MaxWidth>
  </MainHeaderStyle>
)

export default MainHeader
