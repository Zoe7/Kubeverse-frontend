/* eslint-env node */
import {
  CssBaseline,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core'
import React from 'react'

import theme from '../theme'

type Props = {
  children: React.ReactNode
}

export default function MaterialSetup({ children }: Props) {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StylesProvider>
  )
}
