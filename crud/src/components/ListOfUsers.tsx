// 'use client';

import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from '@tremor/react'
import { useAppSelector } from '../hooks/useStore'
import { useUserActions } from '../hooks/useUserActions'
import type { UserWithId } from '../redux/users/slice'

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users)
  const { deleteUser } = useUserActions()
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Github</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: UserWithId) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell className='flex gap-2 justify-center items-center'>
                <img
                  src={`https://unavatar.io/github/${user.github}`}
                  alt={user.name}
                  className='rounded-full size-8'
                />
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.github}</TableCell>
              <TableCell className='flex'>
                <Button onClick={() => deleteUser(user.id)}>Remove</Button>
                <Button>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
