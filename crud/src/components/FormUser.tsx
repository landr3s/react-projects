import React from 'react'
import { useUserActions } from '../hooks/useUserActions'

function FormUser() {
  const { addNewUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    addNewUser({ name, email, github })

    form.reset()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center'
      >
        <input
          type='text'
          name='name'
          placeholder='name'
        />
        <input
          type='text'
          name='email'
          placeholder='email'
        />
        <input
          type='text'
          name='github'
          placeholder='github'
        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default FormUser
