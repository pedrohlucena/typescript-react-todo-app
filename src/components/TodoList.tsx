import React from 'react'

interface TodoListProps {
    items: Array<{id: string, text: string}>
}

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <ul>
            {props.items.map((task, index) => <li key={index}>{task.text}</li>)}
        </ul>
    )
}

export default TodoList