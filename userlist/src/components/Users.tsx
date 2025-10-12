import type { User } from '../types'

interface Props {
  users: User[]
  colorRows: boolean
  handleDelete: (email: string) => void
}

function Users({ users, colorRows, handleDelete }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const backgroundColor = index % 2 === 0 ? '#333' : '#555'
          return (
            <tr
              style={{
                backgroundColor: colorRows ? backgroundColor : 'transparent'
              }}
              key={index}
            >
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt={user.name.first}
                />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => handleDelete(user.email)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Users
