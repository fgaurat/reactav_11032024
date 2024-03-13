import { memo } from "react"

const PureComponent01 = ({value})=>{
    console.log("Render PureComponent01")

    return (
        <>
        <h2>PureComponent01</h2>
        value : {value}
        </>
    )
}


export default memo(PureComponent01)
