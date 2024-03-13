import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  return (
    <>
      <TodoForm/>
      <hr/>
     <TodoList/>
    </>
  )
}

export default App
