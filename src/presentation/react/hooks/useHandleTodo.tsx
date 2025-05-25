import { useEffect, useState } from "react"
import type { TodoItem } from "../../../domain/models/TodoItem"
import type { TodoRepository } from "../../../domain/ports/TodoRepository";
import { AddTodo } from "../../../application/use-cases/AddTodo";
import { GetAllTodos } from "../../../application/use-cases/GetAllTodos";
import { resolveStatus } from "../../../domain/Consts/ResponseStatus";
import { DeleteTodo } from "../../../application/use-cases/DeleteTodo";
import { ToggleTodo } from "../../../application/use-cases/ToggleTodo";

export const useHandleTodo = (repository: TodoRepository) => {
    const [todoState, setTodo] = useState<TodoItem[]>([]);

    useEffect(() => {
        getAllTodos();
    }, [])

    const getAllTodos = () => {
        const useCaseGetAll = new GetAllTodos(repository);
        useCaseGetAll.execute().then((todos) => setTodo(todos));
    }

    const addTodo = (todo: TodoItem) => {
        const useCaseAddTodo = new AddTodo(repository);
        useCaseAddTodo.execute(todo).then((response) => {
            if (response.numberStatus == resolveStatus.numberStatus) {
                setTodo((todos) => [...todos, todo]);
                console.log('Added', todo);
                console.log(response)
            }
        })
    }
    const deleteTodo = (id: number) => {
        const useCaseDeleteTodo = new DeleteTodo(repository);
        useCaseDeleteTodo.execute(id).then((response) => {
            if (response.numberStatus == resolveStatus.numberStatus) {
                getAllTodos();
            } else {
                console.log('error')
            }
        });
    }
    const toggleTodoStatus = (id: number) => {
        const useCaseToggleStatus = new ToggleTodo(repository);
        useCaseToggleStatus.execute(id).then((response) => {
            if (response.numberStatus == resolveStatus.numberStatus) {
                getAllTodos();
            } else {
                console.log('error')
            }
        });
    }
    return (
        [todoState, addTodo, deleteTodo, toggleTodoStatus] as const
    )
}
