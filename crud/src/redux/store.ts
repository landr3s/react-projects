import { configureStore, type Middleware } from '@reduxjs/toolkit'
import usersReducer, { rollBackUser } from './users/slice'
import { toast } from 'sonner'
import { useUserActions } from '../hooks/useUserActions'

const persistenceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)

    window.localStorage.setItem(
      '__redux__state__',
      JSON.stringify(store.getState())
    )
  }

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action
    const previousState = store.getState() as RootState
    next(action)

    if (type === 'users/removeUser') {
      const userIdToRemove = payload
      const userToRemove = previousState.users.find(
        (user) => user.id === userIdToRemove
      )
      fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
        method: 'DELETE'
      })
        .then((res) => {
          if (res.ok) {
            toast.success(`User with id ${payload} removed correctly`)
          } else {
            throw new Error('Error deleting user')
          }
        })
        .catch((err) => {
          toast.error(err.message)
          if (userToRemove) store.dispatch(rollBackUser(userToRemove))
        })
    }
  }

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      persistenceLocalStorageMiddleware,
      syncWithDatabaseMiddleware
    )
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
