import type { Todo } from "../types/todo";

const STORAGE_KEY = "todos";

export function saveTodos(todos: Todo[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function loadTodos(): Todo[] {
    const data: string | null = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}
