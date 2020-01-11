import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Typography, makeStyles, Toolbar } from '@material-ui/core'
import { customTheme } from '../theme'

const useStyles = makeStyles({
  appBar: {
    backgroundColor: `${customTheme.palette.primary.base400}`,
  },
})

export default function MenuAppBar() {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h4">Hello</Typography>
      </Toolbar>
    </AppBar>
  )
}
