
function f(){
    const a =0
    const b = ()=>console.log("bonjour")

    return [a,b]
}


const arr = [10,20,30,40,50]

// const [a,b] = arr

const [a,b] = f()

console.log(a,b)
b()



const o = {name:"GAURAT",firstName:"Fred",age:47}

const {firstName,...c} = o

function f2(o){
    const {firstName,name} = o
    console.log(o.firstName,name)
}

f2(o)

const o1 = {name:"GAURAT",firstName:"Fred"}


// const o2 = o1//Object.assign({},o1)
const o2 = {...o1,age:47}

o1.name="tutu"
console.log(o1)
console.log(o2)




