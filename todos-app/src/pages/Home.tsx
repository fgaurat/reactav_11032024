import React from 'react'
import HOCCompletedTodoList from '../components/HOCCompletedTodoList'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { Todo } from '../core/Todo'
import { useFetchTodos } from '../hooks/useFetchTodos'
import service from '../services/todoService'

function Home() {


    const CompletedTodoList = HOCCompletedTodoList(TodoList)

    const  {todos, setTodos, isLoading} = useFetchTodos()
    const doDelete = (todo:Todo)=>{
        const filteredTodos = todos.filter(t => t.id !== todo.id)
        setTodos(filteredTodos)
        service.deleteTodo(todo)
    }

    
    return (
        <div>
            <h1>Home</h1>
            <TodoForm />
            <hr/>
            {/* <TodoList todos={todos} doDelete={doDelete} isLoading={isLoading}/> */}
            <CompletedTodoList todos={todos} doDelete={doDelete} isLoading={isLoading}/>
        </div>
    )
}

export default Home
