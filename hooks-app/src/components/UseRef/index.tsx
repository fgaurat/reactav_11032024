import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function UseRef(props:any,ref:any) {

    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref,()=>({
        theValue:()=>inputRef?.current?.value,
        setFocus:()=>inputRef?.current?.focus()
    }))
    return (
        <>
            <h2>UseRef</h2>
            <input type="text" ref={inputRef}/>
        </>
    )
}

export default forwardRef(UseRef)
