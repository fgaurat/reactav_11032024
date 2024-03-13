import { lazy, Suspense } from 'react'
import Spinner from '../components/Spinner'
import { Todo } from '../core/Todo'
import { useFetchTodos } from '../hooks/useFetchTodos'
import service from '../services/todoService'

// import TodoForm from '../components/TodoForm'
// import TodoList from '../components/TodoList'
const TodoForm = lazy(()=> import("../components/TodoForm"))
const TodoList = lazy(()=> import("../components/TodoList"))



function Home() {



    const  {todos, setTodos, isLoading} = useFetchTodos()
    const doDelete = (todo:Todo)=>{
        const filteredTodos = todos.filter(t => t.id !== todo.id)
        setTodos(filteredTodos)
        service.deleteTodo(todo)
    }

    
    return (
        <div>
            <h1>Home</h1>
            <Suspense fallback={<Spinner/>}>
                <TodoForm />
            </Suspense>
            <hr/>

            <Suspense fallback={<Spinner/>}>
                <TodoList todos={todos} doDelete={doDelete} isLoading={isLoading}/>
            </Suspense>
        </div>
    )
}

export default Home
