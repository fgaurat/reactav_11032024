import { useEffect, useState } from "react"
import { Todo } from "../../core/Todo"
import { useFetchTodos } from "../../hooks/useFetchTodos"

function TodoListFetch() {
    // const [todos, setTodos] = useState<Todo[]>([])
    
    const  {todos, setTodos, isLoading} = useFetchTodos()

    useEffect(() => {
        (async ()=>{
            const response = await fetch(import.meta.env.VITE_TODOS_URL)
            const data = await response.json()
            setTodos(data)
        })()

        // fetch(import.meta.env.VITE_TODOS_URL)
        //     .then(response => response.json())
        //     // .then(todos =>setTodos(todos))
        //     .then(setTodos)


    }, [])

    return (
        <>
            <h2>TodoListFetch</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo:Todo)=>
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed?"ok":"ko"}</td>
                            <td></td>
                        </tr>
                    
                    )}


                </tbody>
            </table>
        </>
    )
}

export default TodoListFetch
