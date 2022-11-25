import React from 'react'
import Todo from '../types/Todo'

import './TodoList.css'

interface TodoListProps {
    items: Array<Todo>,
    onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <ul>
            {props.items.map(task => (
                <li key={task.id}>
                    <span>{task.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, task.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList