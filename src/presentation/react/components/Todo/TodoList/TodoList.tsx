import React from 'react'
import type { TodoItem } from '../../../../../domain/models/TodoItem'
import { TodoListItem } from '../TodoListItem/TodoListItem'

type TodoListProps = {
    todoListItems: TodoItem[],
    onDelete: (id: number) => void,
    onToggleDoneTodo: (id: number) => void
}
export const TodoList = ({ todoListItems, onDelete, onToggleDoneTodo }: TodoListProps) => {
    return (
        <div id='todo-list'>
            {
                todoListItems.map((item, index) => {
                    return (<TodoListItem todoItem={item} index={index} key={item.id} onDelete={onDelete} onToggleDoneTodo={onToggleDoneTodo} />)
                })
            }
        </div>
    )
}
