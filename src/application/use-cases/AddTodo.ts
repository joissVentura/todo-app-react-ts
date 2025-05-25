import type { IResponseStatus } from "../../domain/interfaces/IResponseStatus";
import type { TodoItem } from "../../domain/models/TodoItem";
import type { TodoRepository } from "../../domain/ports/TodoRepository";

export class AddTodo {
    private repo: TodoRepository;

    constructor(repo: TodoRepository) {
        this.repo = repo;
    }

    async execute(todoItem: TodoItem): Promise<IResponseStatus> {
        return this.repo.addTodoItem(todoItem);
    }
}