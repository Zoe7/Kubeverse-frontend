import React, { useState, useContext } from 'react'
import {
  Button,
  Paper,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { UserContext } from '../utils/UserContext'
import Input from '../components/base/Input'
import { customTheme } from '../theme'

type LoginForm = {
  email: string
  password: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: `white`,
      margin: `${theme.spacing(5)}px auto`,
      padding: theme.spacing(5),
      borderRadius: `${theme.spacing()}px`,
      width: '400px',
      boxShadow: `${customTheme.boxShadow.base800}`,
    },
    button: {
      margin: `${theme.spacing(3)}px 0`,
    },
  })
)

const Login = () => {
  const classes = useStyles()
  const { login } = useContext(UserContext)
  const [formState, setFormState] = useState<LoginForm>({
    email: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    login(formState)
  }

  return (
    <Paper className={classes.paper} square>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="email"
          value={formState.email}
          fullWidth
          onChange={value => setFormState({ ...formState, email: value })}
          required
        />

        <Input
          id="password"
          label="password"
          value={formState.password}
          fullWidth
          onChange={value => setFormState({ ...formState, password: value })}
          required
        />
        <Button variant="contained" type="submit" className={classes.button}>
          Sign in
        </Button>
      </form>
    </Paper>
  )
}

export default Login
