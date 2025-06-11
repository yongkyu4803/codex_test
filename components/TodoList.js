export default function TodoList({ todos, onUpdate }) {
  const handleProgress = (id, progress) => {
    onUpdate(id, progress);
  };

  const grouped = todos.reduce((acc, todo) => {
    acc[todo.category] = acc[todo.category] || [];
    acc[todo.category].push(todo);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {Object.keys(grouped).map((category) => (
        <div key={category} className="border p-4">
          <h2 className="font-bold mb-2">{category}</h2>
          {grouped[category].map((todo) => (
            <div key={todo.id} className="mb-2">
              <div className="flex justify-between">
                <span>{todo.title}</span>
                <span>{todo.date}</span>
              </div>
              <progress className="w-full" value={todo.progress} max="100" />
              <textarea className="border p-1 w-full mt-1" value={todo.memo} readOnly />
              <input type="range" min="0" max="100" value={todo.progress} onChange={(e) => handleProgress(todo.id, Number(e.target.value))} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
