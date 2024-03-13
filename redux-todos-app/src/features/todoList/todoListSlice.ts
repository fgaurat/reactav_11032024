import { createAsyncThunk, createSlice, isFulfilled, isPending } from '@reduxjs/toolkit'
import { Todo } from '../../core/Todo'
import todoService from '../../services/todoService'

export const fetchTodoList = createAsyncThunk(
    'todos/fetchTodoList',
    async () => {
        const data = await todoService.getTodos()
        return data
    },
)
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (todo:Todo) => {
        await todoService.deleteTodo(todo)
        return todo
    },
)

export const saveTodo = createAsyncThunk(
    'todos/saveTodo',
    async (todo:Todo) => {
        const responseSavedTodo = await todoService.saveTodo(todo)
        const savedTodo = await responseSavedTodo.json() 
        return savedTodo
    },
)

export interface TodoListState {
    todos: Todo[],
    isLoading: boolean
}

const initialState: TodoListState = {
    isLoading: false,
    todos: [],
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoList.fulfilled, (state, action) => {
                state.todos = action.payload
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(t => t.id !== action.payload.id)
            })
            .addCase(saveTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addMatcher(isPending(fetchTodoList,deleteTodo,saveTodo),state=>{
                state.isLoading = true
            })
            .addMatcher(isFulfilled(fetchTodoList,deleteTodo,saveTodo),state=>{
                state.isLoading = false
            })
    }
})

// Action creators are generated for each case reducer function
export const { } = todoListSlice.actions

export default todoListSlice.reducer


