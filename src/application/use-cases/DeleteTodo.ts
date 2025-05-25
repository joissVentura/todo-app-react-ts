import type { IResponseStatus } from "../../domain/interfaces/IResponseStatus";
import type { TodoRepository } from "../../domain/ports/TodoRepository";

export class DeleteTodo {
    private repo: TodoRepository;

    constructor(repo: TodoRepository) {
        this.repo = repo;
    }

    async execute(id: number): Promise<IResponseStatus> {
        return this.repo.deleteTodoItem(id);
    }
}