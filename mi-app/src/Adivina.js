import React from "react";

function Adivina()
{

    function numero()
    {
        let aleatorio = Math.floor(Math.random() * 10) + 1;

        let numero_a = document.getElementById("numero").value
        if(numero_a == aleatorio)
        {
            alert("Felicidades adivinaste el numero")
        }
        else
        {
            alert(`Fallaste, la respuesta era ${aleatorio}`)
        }
    }

    return(
    <div>
        <p>Elige un numero del  1 al 10</p>
        <input id="numero" type="number" placeholder="Ingresa el numero..."></input>
        <br></br>
        <button onClick={numero}>Adivinar</button>
    </div>
    );

}

export default Adivina;