"use strict";


/*---------------------------  FORM  ----------------------------------------------------------- */

let enviar = document.getElementById("btn-submit");

let sendForm = async()=>{
    let _nombre = document.getElementById("name");
    let _email = document.getElementById("email");
    let _message = document.getElementById("message");

    console.log(
        _nombre.value,
        _email.value,
        _message.value
    )

    let options = {
        method: "POST", 
        body: JSON.stringify({
            "_nombre": `${_nombre.value}`,
            "_email": `${_email.value}`,
            "_message": `${_message.value}`
        }),
        headers: {"Content-Type":"application/json"}
    }

    if(_message.value.length > 1 && _nombre.value.length > 1 && _email.value.length > 1)
    {
        let peticion  = await fetch(`http://localhost:4200/email`, options)  /* http://portfoliogithubio.up.railway.app/email  */
        let resultado = await peticion.json()
      
    } else { alert("No llenaste el formulario") }
  
}

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    sendForm();

    let _nombre = document.getElementById("name"); 
    let _email = document.getElementById("email");
    let _message = document.getElementById("message");

    // console.log("btn alcanzado");

    setTimeout(()=>{  
        _nombre.value="";
         _email.value= ""; 
         _message.value=""; 
        },500) 
    
})