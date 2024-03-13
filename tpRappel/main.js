


function getTodo(id){
    const p = new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            const todo = {
                id,
                title:`Todo id ${id}`,
                completed:false
            }
            resolve(todo)
    
        },1000)
    
    })
    return p
}

// const pTodo = getTodo(1)
// pTodo.then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)

// }).then((todo)=>{
//     console.log(todo)
//     return getTodo(todo.id+1)

// })

// const p1 = getTodo(1)
// const p2 = getTodo(2)
// const p3 = getTodo(3)
// const p4 = getTodo(4)

// Promise.all([p1,p2,p3,p4]).then(all => console.log(all))

async function main(){
    const todo1 = await getTodo(1)
    console.log(todo1)
    const todo2 = await getTodo(todo1.id+1)
    console.log(todo2)

    const p1 = getTodo(1)
    const p2 = getTodo(2)
    const p3 = getTodo(3)
    const p4 = getTodo(4)
    const all = await Promise.all([p1,p2,p3,p4])
    console.log(all)
}





main()

