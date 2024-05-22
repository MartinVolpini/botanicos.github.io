"use strict";

let btn  = document.querySelector( ".clt__btn__plus" );
let btnId = document.getElementById("clt__btn__plus")
let conteiner = document.getElementById( "clientesTrabajos__plus" );
let subConteiner = document.getElementById( "clt__plus__conteiner" );

console.log( 
    // btn, 
    // btnId , 
    // conteiner , 
    // subConteiner
    )



async function repliegueSubConteiner(){
    // alert("repliegueSubConteiner")
    let _res = await subConteiner.classList.replace( "clt__plus__conteiner__active" , "clt__plus__conteiner__none" );
    return _res ;
 
};

async function despliegueSubConteiner(){
    // alert("despliegueSubConteiner")
    let _res = await subConteiner.classList.replace("clt__plus__conteiner__none" , "clt__plus__conteiner__active");
    return _res ;
 
};

async function repliegueConteiner(){
    // alert("repliegueConteiner")
    let _res = await conteiner.classList.replace( "clientesTrabajos__plus__active" , "clientesTrabajos__plus__none" );
    return _res ;
};

async function despliegueConteiner(){
    // alert("despliegueConteiner")
    let _res = await conteiner.classList.replace("clientesTrabajos__plus__none" , "clientesTrabajos__plus__active");
    return _res ;
};

function hacerCambio(){
    let valor = conteiner.classList.value;
    let valor2 = subConteiner.classList.value;

    if (  valor == "clientesTrabajos__plus__none" ){

        // console.log("IF TOP", subConteiner , conteiner )
        despliegueConteiner();


        if( valor2 == "clt__plus__conteiner__none" ){

            // console.log("SUBIF TOP", subConteiner , conteiner )
            despliegueSubConteiner();
            

            // console.log("SUBIF BOTTOM", subConteiner , conteiner )
        }
    } else { 
        // console.log("ELSE TOP", subConteiner , conteiner )
        repliegueSubConteiner();
        
        setTimeout(()=>{
            repliegueConteiner();
            // console.log("ELSE BOTTOM", subConteiner , conteiner );
        }, 2090)
    }
}

btn.addEventListener("click", (e) => { hacerCambio(); })

