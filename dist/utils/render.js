export function renderTodos(todos, listElement) {
    listElement.innerHTML = "";
    if (todos.length === 0) {
        listElement.innerHTML = `
        <li class="empty">Список дел пустой</li>
        `;
        updateCounters(todos);
        return;
    }
    todos.forEach(todo => {
        const li = document.createElement("li");
        // li.textContent = todo.text;
        // li.className = todo.completed ? "completed" : "";
        li.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="actions">
                <button class="toggle-btn" data-id="${todo.id}">
                    ${todo.completed ? "Вернуть" : "Готово"}
                </button>
                <button class="delete-btn" data-id="${todo.id}">
                    Удалить
                </button>
            </div>
        `;
        if (todo.completed) {
            li.classList.add("completed");
        }
        // const textSpan = document.createElement("span");
        // textSpan.classList.add("todo-text");
        // textSpan.textContent = todo.text;
        // const toggleButton = document.createElement("button");
        // toggleButton.textContent = todo.completed ? "Вернуть" : "Готово";
        // toggleButton.dataset.id = todo.id.toString();
        // toggleButton.classList.add("toggle-btn");
        // const deleteButton = document.createElement("button");
        // deleteButton.textContent = "Удалить";
        // deleteButton.dataset.id = todo.id.toString();
        // deleteButton.classList.add("delete-btn");
        // li.appendChild(textSpan);
        // li.appendChild(toggleButton);
        // li.appendChild(deleteButton);
        listElement.appendChild(li);
    });
    updateCounters(todos);
}
export function updateCounters(todos) {
    const total = document.getElementById("totalCounter");
    const completed = document.getElementById("completedCounter");
    if (total && completed) {
        total.textContent = todos.length.toString();
        completed.textContent = todos.filter(t => t.completed).length.toString();
    }
}
