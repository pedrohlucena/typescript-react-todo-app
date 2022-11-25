import React, { useRef } from "react"
import Todo from '../types/Todo'

interface NewTodoProps {
    addTodo: (todo: Todo) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        props.addTodo({id: 't2', text: enteredText})
    }

    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo text</label>
            <input id="todo-text" type="text" ref={textInputRef}/>
        </div>
        <button type="submit">Add todo</button>
    </form>
}

export default NewTodo