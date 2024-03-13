import { beforeEach, describe, expect, test } from 'vitest'
import {render} from "@testing-library/react"
import { Todo } from '../../core/Todo'
import TodoList from './TodoList'



describe('Testing TodoList',()=>{

    let todos: Todo[]


    beforeEach(()=>{
        todos = [
            {
                "userId": 1,
                "id": "6",
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
              },
              {
                "userId": 1,
                "id": "7",
                "title": "illo expedita consequatur quia in",
                "completed": false
              },
              {
                "userId": 1,
                "id": "8",
                "title": "quo adipisci enim quam ut ab",
                "completed": true
              }            
        ]
    })

    test("render TodoList",()=>{

        render(<TodoList todos={todos} isLoading={false} doDelete={()=>{}} />)
    })
    
    test("TodoList must have 3 rows",()=>{

        const r = render(<TodoList todos={todos} isLoading={false} doDelete={()=>{}} />)
        const trs = r.container.querySelectorAll('tbody>tr')
        expect(trs.length).toBe(3)
    })



})