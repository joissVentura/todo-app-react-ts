import type { IResponseStatus } from "../interfaces/IResponseStatus";
import type { TodoItem } from "../models/TodoItem";

export interface TodoRepository {

    /* CREATE */
    addTodoItem(todoItem: TodoItem): Promise<IResponseStatus>;

    /* LIST */
    getAll(): Promise<TodoItem[]>;
    /* getAllOrderedByCreated(): Promise<TodoItem[]>;
    getAllOrderedByStatus(): Promise<TodoItem[]>; */

    /* DELETE */
    deleteTodoItem(id: number): Promise<IResponseStatus>;

    /* UPDATE */
    /* updateTodoItem(item: TodoItem): Promise<void>; */
    toggleTodoStatus(id: number): Promise<IResponseStatus>;
}