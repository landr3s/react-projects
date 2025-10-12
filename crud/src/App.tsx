import React from 'react'
import ListOfUsers from './components/ListOfUsers'
import FormUser from './components/FormUser'
import { Toaster } from 'sonner'
function App() {
  return (
    <>
      <ListOfUsers />
      <FormUser />
      <Toaster richColors />
    </>
  )
}

export default App
