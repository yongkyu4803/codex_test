(function() {
  let todos = [];

  function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
      todos = JSON.parse(stored);
    }
  }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function renderTodos() {
    const container = document.getElementById('todo-container');
    container.innerHTML = '';
    const grouped = todos.reduce((acc, todo) => {
      acc[todo.category] = acc[todo.category] || [];
      acc[todo.category].push(todo);
      return acc;
    }, {});

    Object.keys(grouped).forEach(category => {
      const section = document.createElement('div');
      const heading = document.createElement('h2');
      heading.textContent = category;
      section.appendChild(heading);

      grouped[category].forEach(todo => {
        const item = document.createElement('div');
        item.className = 'todo-item';

        const title = document.createElement('span');
        title.textContent = todo.title + ' '; // simple layout
        item.appendChild(title);

        const date = document.createElement('span');
        date.textContent = todo.date;
        item.appendChild(date);

        const progress = document.createElement('progress');
        progress.max = 100;
        progress.value = todo.progress;
        item.appendChild(progress);

        const memo = document.createElement('textarea');
        memo.value = todo.memo;
        memo.readOnly = true;
        item.appendChild(memo);

        const range = document.createElement('input');
        range.type = 'range';
        range.min = 0;
        range.max = 100;
        range.value = todo.progress;
        range.addEventListener('input', function(e) {
          updateProgress(todo.id, Number(e.target.value));
        });
        item.appendChild(range);

        section.appendChild(item);
      });

      container.appendChild(section);
    });
  }

  function addTodo(e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const category = document.getElementById('category').value.trim() || 'General';
    const date = document.getElementById('date').value;
    const memo = document.getElementById('memo').value;
    if (!title) return;
    todos.push({ id: Date.now(), title, category, date, memo, progress: 0 });
    saveTodos();
    renderTodos();
    e.target.reset();
  }

  function updateProgress(id, progress) {
    todos = todos.map(t => (t.id === id ? { ...t, progress } : t));
    saveTodos();
    renderTodos();
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadTodos();
    renderTodos();
    document.getElementById('todo-form').addEventListener('submit', addTodo);
  });
})();
