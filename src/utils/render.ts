import type { Todo } from "../types/todo";

export function renderTodos(
    todos: Todo[],
    listElement: HTMLUListElement
): void {
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

        if (todo.completed) {
            li.classList.add("completed");
        }

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

        listElement.appendChild(li);
    });

    updateCounters(todos);
}

export function updateCounters(todos: Todo[]): void {
    const total = document.getElementById("totalCounter");
    const completed = document.getElementById("completedCounter");

    if (total && completed) {
        total.textContent = todos.length.toString();
        completed.textContent = todos.filter(t => t.completed).length.toString();
    }
}
