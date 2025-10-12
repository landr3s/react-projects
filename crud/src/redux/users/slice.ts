import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
}

const DEFAULT_STATE: UserWithId[] = [
  {
    name: 'John Doe',
    id: '1',
    email: 'johndoe@gmail.com',
    github: 'johndoe'
  }
]

const initialState = (() => {
  const persisted = window.localStorage.getItem('__redux__state__')
  return persisted ? JSON.parse(persisted).users : DEFAULT_STATE
})()

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeUser: (state: UserWithId[], action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    },
    addUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      return [...state, { id, ...action.payload }]
    },
    rollBackUser: (state, action: PayloadAction<UserWithId>) => {
      const existingUser = state.find(
        (user): User => user.id === action.payload.id
      )
      if (!existingUser) {
        return [...state, { ...action.payload }]
      }
    }
  }
})
export default userSlice.reducer

export const { removeUser, addUser, rollBackUser } = userSlice.actions
