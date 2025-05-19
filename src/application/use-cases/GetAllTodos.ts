import type { TodoItem } from "../../domain/models/TodoItem";
import type { TodoRepository } from "../../domain/ports/TodoRepository";

export class GetAllTodos {
    private repo: TodoRepository;

    constructor(repo: TodoRepository) {
        this.repo = repo;
    }

    async execute(): Promise<TodoItem[]> {
        return this.repo.getAll();
    }
}