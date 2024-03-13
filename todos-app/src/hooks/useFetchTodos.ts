import { useDebugValue, useEffect, useState } from "react"
import { Todo } from "../core/Todo"
import service from "../services/todoService"

export const useFetchTodos = () =>{
    const [todos, setTodos] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useDebugValue("DEBUG useFetchTodos")
    useEffect(() => {
        (async ()=>{
            setIsLoading(true)
            const data = await service.getTodos()
            setTodos(data)
            setIsLoading(false)

        })()

        // fetch(import.meta.env.VITE_TODOS_URL)
        //     .then(response => response.json())
        //     // .then(todos =>setTodos(todos))
        //     .then(setTodos)


    }, [])


    return {todos,setTodos,isLoading}

}