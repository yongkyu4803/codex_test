import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('회사 - 일반')
  const [date, setDate] = useState('')
  const [memo, setMemo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title) return
    onAdd({
      title,
      category,
      date,
      progress: 0,
      memo,
    })
    setTitle('')
    setDate('')
    setMemo('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <select
        className="border p-2 w-full"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="회사 - 일반">회사 - 일반</option>
        <option value="회사 - 팀">회사 - 팀</option>
        <option value="개인">개인</option>
        <option value="일기">일기</option>
        <option value="기타">기타</option>
      </select>
      <input
        type="date"
        className="border p-2 w-full"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Memo"
        value={memo}
        onChange={e => setMemo(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Task
      </button>
    </form>
  )
}
