import React, { createContext, useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { UserContext as UserContextType, User, UserCredentials } from '../types'

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
})

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        name
        email
      }
    }
  }
`

type Props = { children: React.ReactNode }

export const UserContextProvider = ({ children }: Props) => {
  const history = useHistory()
  const [user, setUser] = useState<User | null>(null)
  const [loginMutation] = useMutation(LOGIN, {
    onCompleted: (data: any) => {
      setUser({ name: data?.login?.user?.name, email: data?.login?.user?.name })
      localStorage.setItem('token', data?.login?.access_token)
      history.push('/')
    },
  })

  const login = (userCredentials: UserCredentials) => {
    loginMutation({
      variables: {
        password: userCredentials.password,
        username: userCredentials.email,
      },
    })
  }

  const logout = () => {
    console.log('logout!')
  }

  const isAuthenticated = Boolean(localStorage.getItem('token'))

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  )
}
