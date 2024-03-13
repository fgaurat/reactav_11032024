import React, { memo } from 'react'

function PureComponent02({onClick}) {
    console.log("render PureComponent02")
    return (
        <div>
            <h2>onClick</h2>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default memo(PureComponent02)
