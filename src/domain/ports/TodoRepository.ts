import type { TodoItem } from "../models/TodoItem";

export interface TodoRepository {

    /* CREATE */
    addTodoItem(todoItem: TodoItem): void;

    /* LIST */
    getAll(): Promise<TodoItem[]>;
    /* getAllOrderedByCreated(): Promise<TodoItem[]>;
    getAllOrderedByStatus(): Promise<TodoItem[]>; */

    /* DELETE */
    /* deleteTodoItem(id: string): Promise<void>; */

    /* UPDATE */
    /* updateTodoItem(item: TodoItem): Promise<void>; */
}