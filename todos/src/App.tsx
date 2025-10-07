import { useState } from 'react'
import './App.css'
type Todos = Todo[]

interface Todo {
  title: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todos>([])
  const [completedTodos, setCompletedTodos] = useState<Todos>([])
  const [todo, setTodo] = useState<Todo>({ title: '', completed: false })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTodos([...todos, { ...todo }])
    setTodo({ title: '', completed: false })
  }

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ title: e.target.value, completed: false })
  }

  const removeTodo = (index: number) => {
    setCompletedTodos([...completedTodos, todos[index]])
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div>
      <section>
        <h1>Todos</h1>
        {todos.map((todo, index) => (
          <div
            key={index}
            className='todo'
          >
            <h4>{todo.title}</h4>
            <div>
              <button onClick={() => removeTodo(index)}>Completed</button>
            </div>
          </div>
        ))}
      </section>

      {completedTodos?.length > 0 && (
        <section>
          <h1>Completed Todos</h1>
          {completedTodos.map((todo, index) => (
            <div key={index}>
              <h4 style={{ textDecoration: 'underline' }}>{todo.title}</h4>
            </div>
          ))}
        </section>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Enter:{' '}
          <input
            type='text'
            value={todo.title}
            onChange={handleChangeTodo}
          />
        </label>
      </form>
    </div>
  )
}

export default App
