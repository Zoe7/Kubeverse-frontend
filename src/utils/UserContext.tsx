import React, { createContext, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { UserContext as UserContextType, User, UserCredentials } from '../types'

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
})

type Props = { children: React.ReactNode }

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async ({ email, password }: UserCredentials) => {
    setUser({ email, name: 'something' })
    console.log(`login! email: ${email}, password: ${password}`)
  }

  const logout = () => {
    console.log('logout!')
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
