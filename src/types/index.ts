export type User = {
  name: string
  email: string
}

export type UserCredentials = {
  email: string
  password: string
}

export type UserContext = {
  user: User | null
  login: ({ email, password }: UserCredentials) => any
  logout: () => any
  isAuthenticated: boolean
}
