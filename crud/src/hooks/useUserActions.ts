import {
  addUser,
  removeUser,
  rollBackUser,
  type User,
  type UserId,
  type UserWithId
} from '../redux/users/slice'
import { useAppDispatch } from './useStore'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const deleteUser = (id: UserId) => {
    dispatch(removeUser(id))
  }

  const addNewUser = ({ name, email, github }: User) => {
    dispatch(addUser({ name, email, github }))
  }

  const rollbackDeletingUser = (user: UserWithId) => {
    dispatch(rollBackUser({ ...user }))
  }

  return { deleteUser, addNewUser, rollbackDeletingUser }
}
