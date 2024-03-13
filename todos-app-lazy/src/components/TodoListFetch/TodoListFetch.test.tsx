import { afterAll, beforeAll, describe, expect, test } from "vitest";
import {render, waitFor} from "@testing-library/react"


import {setupServer} from "msw/node"
import {http,HttpResponse} from "msw"
import { Todo } from "../../core/Todo";
import TodoListFetch from "./TodoListFetch";

let todos: Todo[] = [
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

const server = setupServer(
    http.get(import.meta.env.VITE_TODOS_URL,()=>{
        return HttpResponse.json(todos)
    })
)


describe('Testing TodoListFetch', () => {

    beforeAll(()=>{
        server.listen()
    })
    
    afterAll(()=>{
        server.close()
    })

    test("TodoListFetch must have 3 todos",async ()=>{
        const r = render(<TodoListFetch/>)
        await waitFor(()=>{
            const trs = r.container.querySelectorAll('tbody>tr')
            expect(trs.length).toBe(3)
        })
        
    })
})


