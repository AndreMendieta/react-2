import { useState } from "react";

function Lista() {
    const [nombres, setNombres]= useState(["ana","luis","carlos","pamela"]); 
    return (
        <div>
            <h3>Lista de Nombres</h3>
            <ul>
                {nombres.map((nombre, index) => (<li key={index}>{nombre}</li>))}
            </ul>
            <button onClick={() => setNombres(nombres.slice(onabort, -1))}>Eliminar Ultimo</button>
            </div>
    )
}
export default Lista