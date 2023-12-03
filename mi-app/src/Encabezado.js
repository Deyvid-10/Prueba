import React from "react";
import Imagenes from './Imagenes/adivinar.png'

function Encabezado()
{
    return(
        <div>
            <h1>Adivina el numero</h1>
            <img src={Imagenes}></img>
        </div>
    );
}

export default Encabezado