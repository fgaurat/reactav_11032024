import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Todo } from "../../core/Todo"
import { saveTodo } from "../../features/todoList/todoListSlice"
import { AppDispatch } from "../../store"

type Inputs = {
    title: string
}

function TodoForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const dispatch = useDispatch<AppDispatch>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const todo:Todo = {...data,completed:false}
        dispatch(saveTodo(todo))
    }

    return (
        <>
            <h2>TodoForm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Todo title</label>
                    <input type="text" {...register("title", { required: true })} className="form-control" id="todoTitle" placeholder="Todo title" />
                    {errors.title && <span>This field is required</span>}

                </div>
                <div>
                    <input type="submit" value="Créer" className="btn btn-primary" />
                </div>
            </form>

        </>
    )
}
export default TodoForm
