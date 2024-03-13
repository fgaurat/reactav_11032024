import { Todo } from '../../core/Todo'

interface ITodoProps{
    todo:Todo,
    doDelete:(todo:Todo)=>void
}

function TodoRow({todo,doDelete}:ITodoProps) {
    
    return (
        <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed?"ok":"ko"}</td>
        <td>
            <button className="btn btn-danger" onClick={ () =>doDelete(todo)}>Delete</button>
        </td>
    </tr>
    )
}

export default TodoRow
