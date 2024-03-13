import { Todo } from "../core/Todo"



const getTodos = async ()=>{
    const response = await fetch(import.meta.env.VITE_TODOS_URL)
    return response.json()
}


const deleteTodo = async (todo:Todo)=>{
    return fetch(
        `${import.meta.env.VITE_TODOS_URL}/${todo.id}`,{
        method:'DELETE'
        })
}


const saveTodo = async (todo:Todo)=>{
    return fetch(
        import.meta.env.VITE_TODOS_URL,{
        method:"POST",
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify(todo)}
        )
}

export default {
    getTodos,
    deleteTodo,
    saveTodo
}