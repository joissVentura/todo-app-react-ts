import type { TodoItem } from "../../domain/models/TodoItem";
import type { TodoRepository } from "../../domain/ports/TodoRepository";

export class DataTodoRepository implements TodoRepository {

    private nameKeyTodolist = 'todo_list';

    private recoverAll(): TodoItem[] {
        const data = localStorage.getItem(this.nameKeyTodolist);
        const todoList: TodoItem[] = data ? JSON.parse(data) : [];
        return todoList;
    }

    getAll(): Promise<TodoItem[]> {
        return new Promise<TodoItem[]>((resolve) => {
            const data = this.recoverAll();
            resolve(data);
        });
    }

    /* getAllOrderedByCreated(): Promise<TodoItem[]> {

    } */

    /* getAllOrderedByStatus(): Promise<TodoItem[]> {

    } */

    addTodoItem(todoItem: TodoItem): void {
        const data = this.recoverAll().push(todoItem);
        const newTodoList = JSON.stringify(data);
        localStorage.setItem(this.nameKeyTodolist, newTodoList)
    }

    /* deleteTodoItem(id: string): Promise<void> {

    } */

    /* updateTodoItem(item: TodoItem): Promise<void> {

    } */
}