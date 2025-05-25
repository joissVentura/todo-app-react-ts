import { useState } from 'react';
import type { TodoItem } from '../../../../../domain/models/TodoItem'
import { MdOutlineEdit as PenIcon } from "react-icons/md";
import { MdOutlineDelete as TrashIcon } from 'react-icons/md';
import { InputSwitch, type InputSwitchChangeEvent } from 'primereact/inputswitch';
import { status } from '../../../../../domain/Consts/Status';

type TodoListItemProps = {
    todoItem: TodoItem,
    index: number,
    onDelete: (id: number) => void,
    onToggleDoneTodo: (id: number) => void,
}
export const TodoListItem = ({ todoItem, onDelete, onToggleDoneTodo }: TodoListItemProps) => {
    const { id, description, done } = todoItem;
    const [editable, setEditable] = useState(false);
    const [checked, setChecked] = useState(done);

    const handleEditable = () => {
        setEditable((editableState) => !editableState);
    }
    const deleteTodo = () => {
        onDelete(id);
    }
    const handleChecked = (e: InputSwitchChangeEvent) => {
        onToggleDoneTodo(id);
        setChecked(e.value);
        console.log(e)
    }
    return (
        <div className='todo-list-item border-b-1 p-2 border-gray-200 flex'>
            {
                editable ?
                    <div>
                        <input type="text" className='p-1 border-1 rounded-md border-gray-300 active:border-gray-300' value={description} />

                    </div>
                    :
                    <div className='p-2 w-full xl:justify-between xl:flex xl:flex-row'>
                        <div className='w-fit flex-wrap xl:flex-auto'>
                            <span className='max-lg:flex-col break-words whitespace-normal max-lg:w-full'>{description}</span>
                        </div>
                        <div className='flex flex-row justify-between items-center xl:flex-auto'>
                            <span className='font-semibold'>{done ? status.finished : status.pending}</span>
                            <InputSwitch checked={checked} onChange={(e) => { handleChecked(e) }} title={checked ? 'Dejar pendiente' : 'Finalizar'} />
                            <PenIcon size={16} onClick={handleEditable} className='hover:cursor-pointer' title='Editar' />
                            <TrashIcon size={16} onClick={deleteTodo} className='hover:cursor-pointer' title='Eliminar' />
                        </div>
                    </div>
            }
        </div>
    )
}
