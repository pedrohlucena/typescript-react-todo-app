import React, { useState } from 'react'
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './types/Todo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const todoAddHandler = (text: string) => {
    const newTodo: Todo = {id: Math.random().toString(), text}
    setTodos(previousTodos => [...previousTodos, newTodo])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(previousTodos => {
      return previousTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos}/>  
    </div>
  )
}

export default App;