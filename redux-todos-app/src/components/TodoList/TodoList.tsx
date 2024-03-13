import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Todo } from "../../core/Todo"
import { RootState,AppDispatch } from "../../store"
import TodoRow from "./TodoRow"

import {fetchTodoList,deleteTodo} from "../../features/todoList/todoListSlice"


function TodoList() {
    
    const {todos,isLoading} = useSelector((state: RootState) => state.theTodos)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTodoList())
    }, [])

    const doDelete = (todo:Todo)=>{
        dispatch(deleteTodo(todo))
    }

    return (
        <>
            <h2>TodoList</h2>

            {isLoading && "Loading ..."}
            
            {!isLoading && 
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
                    <TodoRow key={todo.id} todo={todo} doDelete={doDelete}/>
                    
                    )}


                </tbody>
            </table>
            }
        </>
    )
}

export default TodoList
