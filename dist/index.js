import { saveTodos, loadTodos } from "./utils/storage.js";
import { renderTodos } from "./utils/render.js";
import { initialTodos } from "./data/initialTodos.js";
const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");
let todos = loadTodos();
if (todos.length === 0) {
    todos = initialTodos;
    saveTodos(todos);
}
renderTodos(todos, list);
button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text)
        return;
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos, list);
    input.value = "";
});
list.addEventListener("click", (event) => {
    const target = event.target;
    const button = target.closest("button");
    if (!button)
        return;
    const id = Number(target.dataset.id);
    if (button.classList.contains("toggle-btn")) {
        const todo = todos.find(t => t.id === id);
        if (!todo)
            return;
        todo.completed = !todo.completed;
    }
    if (button.classList.contains("delete-btn")) {
        todos = todos.filter(t => t.id != id);
    }
    saveTodos(todos);
    renderTodos(todos, list);
});
