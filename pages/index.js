import { useEffect, useState } from 'react'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default function Home() {
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
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onUpdate={updateProgress} />
    </div>
  )
}
