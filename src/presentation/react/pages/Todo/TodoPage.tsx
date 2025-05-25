import React from 'react'
import { useHandleTodo } from '../../hooks/useHandleTodo'
import { DataTodoRepository } from '../../../../infrastructure/repositories/DataTodoRepository';
import type { TodoItem } from '../../../../domain/models/TodoItem';
import { useInput } from '../../hooks/useInput';
import { TodoList } from '../../components/Todo/TodoList/TodoList';

export const TodoPage = () => {
    const repository = new DataTodoRepository();

    const [inputTodo, setinputTodo, clearInputTodo] = useInput('');
    const [todoListItems, addTodo, deleteTodo, toggleDoneTodo] = useHandleTodo(repository);

    const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setinputTodo(value);
    }
    const handleAddTodo = () => {
        if (inputTodo.trim()) {
            const todo: TodoItem = {
                id: Date.now(),
                description: inputTodo,
                done: false
            }
            addTodo(todo);
            clearInputTodo();
        }
    }

    return (
        <div className='flex flex-col w-sm mx-auto pt-6 gap-2 md:w-md lg:w-lg xl:w-[70%] 2xl:w-[65%]' id='todo'>
            <h2 className='text-2xl font-semibold'>Agregar tarea</h2>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold'>Descripcion de la tarea</h3>
                <button className='bg-gray-700 rounded-lg p-1.5 text-white hover:bg-gray-900 cursor-pointer transition-colors duration-300' onClick={handleAddTodo}>Agregar</button>
            </div>
            <input type="text" placeholder='Nueva tarea' className='rounded-lg bg-gray-200 py-1.5 px-2.5 border-0 w-full' onChange={handleInputTodo} value={inputTodo} />

            <TodoList todoListItems={todoListItems} onDelete={deleteTodo} onToggleDoneTodo={toggleDoneTodo} />
        </div>
    )
}
