import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

function App() {


  return (
    <div>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App
