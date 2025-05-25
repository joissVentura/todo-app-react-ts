import { resolveStatus } from "../../domain/Consts/ResponseStatus";
import type { IResponseStatus } from "../../domain/interfaces/IResponseStatus";
import type { TodoItem } from "../../domain/models/TodoItem";
import type { TodoRepository } from "../../domain/ports/TodoRepository";

export class DataTodoRepository implements TodoRepository {

    private nameKeyTodolist = 'todo_list';

    private recoverAll(): TodoItem[] {
        const data = localStorage.getItem(this.nameKeyTodolist);
        const todoList: TodoItem[] = data ? JSON.parse(data || '[]') : [];
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

    addTodoItem(todoItem: TodoItem): Promise<IResponseStatus> {
        return new Promise((resolve) => {
            const data = this.recoverAll();
            const newTodoList = [...data, todoItem];
            const todoParsed = JSON.stringify(newTodoList);
            localStorage.setItem(this.nameKeyTodolist, todoParsed)
            resolve(resolveStatus);
        })
    }

    deleteTodoItem(id: number): Promise<IResponseStatus> {
        return new Promise((resolve) => {
            const data = this.recoverAll().filter(todo => todo.id != id);
            const todoParsed = JSON.stringify(data);
            localStorage.setItem(this.nameKeyTodolist, todoParsed);
            resolve(resolveStatus);
        })
    }
    toggleTodoStatus(id: number): Promise<IResponseStatus> {
        return new Promise((resolve) => {
            const data = this.recoverAll().map((todo) => {
                if (todo.id == id) {
                    const updatedStatus: TodoItem = { ...todo, "done": !todo.done, };
                    console.log('si', updatedStatus)
                    return updatedStatus;
                }
                return todo;
            });
            const todoParsed = JSON.stringify(data);
            console.log(todoParsed)
            localStorage.setItem(this.nameKeyTodolist, todoParsed);
            resolve(resolveStatus);
        })
    }
    /* updateTodoItem(item: TodoItem): Promise<void> {

    } */
}