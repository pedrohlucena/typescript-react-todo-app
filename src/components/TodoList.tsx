import React from 'react'
import Todo from '../types/Todo'

interface TodoListProps {
    items: Array<Todo>
}

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <ul>
            {props.items.map((task, index) => <li key={index}>{task.text}</li>)}
        </ul>
    )
}

export default TodoList