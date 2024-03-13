import { Todo } from "../../core/Todo"
import { useFetchTodos } from "../../hooks/useFetchTodos"
import TodoRow from "./TodoRow"
import service from "../../services/todoService"


function TodoList() {
    
    const  {todos, setTodos, isLoading} = useFetchTodos()
    const doDelete = (todo:Todo)=>{
        const filteredTodos = todos.filter(t => t.id !== todo.id)
        setTodos(filteredTodos)
        service.deleteTodo(todo)
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
