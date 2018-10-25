import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {}

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
