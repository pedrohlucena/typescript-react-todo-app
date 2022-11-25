import React, { useState } from 'react'
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './types/Todo'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  return (
    <div className='App'>
      <NewTodo addTodo={addTodo}/>
      <TodoList items={todos}/>  
    </div>
  )
}

export default App;