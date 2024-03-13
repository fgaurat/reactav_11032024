import React, { useEffect, useState } from 'react'

function UseEffect() {
    
    const [count,setCount] = useState(0)


    useEffect(() => {
        //componentDidMount
        const interv = setInterval(()=>{
            console.log("inc")
            setCount(c => c+1)
        },1000)
    return  ()=>{
        console.log("end")
        clearInterval(interv)
    }
    }, [])

    return (
        <>
        <h2>UseEffect</h2>
        <strong>count : {count}</strong>
        </>
    )
}

export default UseEffect
