import { useEffect, useRef, useState } from 'react'
import './App.css'
import Users from './components/Users'
import type { ResultsApi, User } from './types'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [colors, setColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const originalUsers = useRef<User[]>([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((json: ResultsApi) => {
        originalUsers.current = json.results
        setUsers(json.results)
      })
  }, [])

  const toggleColors = () => {
    setColors(!colors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry((prev) => !prev)
  }

  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) =>
        a.location.country.localeCompare(b.location.country)
      )
    : users

  const handleRemoveUser = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  return (
    <div>
      <header>
        <h1>User List</h1>
        <button onClick={toggleColors}>
          {colors ? 'Fade Rows' : 'Color Rows'}
        </button>
        <button onClick={toggleSortByCountry}>
          {sortByCountry ? 'Unsort by country' : 'Sort by country'}
        </button>
        <button onClick={handleReset}>Reset State</button>
      </header>
      <main style={{ marginTop: '24px' }}>
        <Users
          handleDelete={handleRemoveUser}
          users={sortedUsers}
          colorRows={colors}
        />
      </main>
    </div>
  )
}

export default App
