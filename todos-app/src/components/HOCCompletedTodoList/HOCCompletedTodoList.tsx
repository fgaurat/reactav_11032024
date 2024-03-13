import React from 'react'
import { Todo } from '../../core/Todo'
import TodoList,{ITodoListProps} from '../TodoList'


function HOCCompletedTodoList(TodoList:any) {

    return ({todos,doDelete,isLoading}:ITodoListProps)=>{
        const completedTodos = todos.filter((t:Todo)=>t.completed)
        return <TodoList todos={completedTodos} doDelete={doDelete} isLoading={isLoading}/>
    }
    
}

export default HOCCompletedTodoList
