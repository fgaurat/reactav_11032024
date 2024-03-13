import React, { useContext,useMemo, useState } from 'react'
import { ThemeContext } from '../../App'


const longWork = (t=500)=>{
    console.log("start longWork")
    const end = Date.now()+t
    while(Date.now()<end){}
    console.log("end longWork")
}



const toUpper = (value:string) =>{
    longWork()
    return value.toUpperCase()
}

function UseMemo() {
    const {theme,setTheme} = useContext(ThemeContext);
    const [a, setA] = useState("")
    const [b, setB] = useState("")

    // const upperB = toUpper(b)
    const upperB = useMemo(() => toUpper(b), [b])
    console.log("render UseMemo")
    return (
        <div>
            theme : {theme}
            <input type="text" value={a} onChange={(e:React.FormEvent<HTMLInputElement>) => setA(e.target.value)}/>
            <br/>
            <input type="text" value={b} onChange={(e:React.FormEvent<HTMLInputElement>) => setB(e.target.value)}/>
            <br/>
            a: {a}
            <br/>
            b: {upperB}
            <button onClick={() => {theme==='light'?setTheme('dark'):setTheme('light')}}>
          Switch to light theme
        </button>        </div>
    )
}

export default UseMemo
