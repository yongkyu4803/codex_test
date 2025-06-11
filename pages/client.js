import { useEffect, useState } from 'react'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default function ClientPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('todos')
    if (stored) setTodos(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = todo => {
    setTodos([...todos, { ...todo, id: Date.now() }])
  }

  const updateProgress = (id, progress) => {
    setTodos(todos.map(t => (t.id === id ? { ...t, progress } : t)))
  }

  return (
    <div>
      {/* Layout will be customized by the client */}
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateProgress} />
    </div>
  )
}
