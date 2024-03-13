// <Hello name="Fred"/> => <h2>Bonjour Fred</h2>   
function Hello({name}:any) {
    return (
        <>
         <h2>Bonjour {name}</h2>   
        </>
    )
}

export default Hello
