import { Todo } from "../../core/Todo"
import TodoRow from "./TodoRow"

export interface ITodoListProps{
    todos:Todo[]
    doDelete:(todo:Todo)=>void
    isLoading:boolean
}

function TodoList({todos,doDelete,isLoading}:ITodoListProps) {
    


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
