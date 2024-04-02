"use strict";

let btn  = document.querySelector( ".clt__btn__plus" );
let btnId = document.getElementById("clt__btn__plus")
let conteiner = document.querySelector( ".clientesTrabajos__plus" );

console.log( btn, btnId , conteiner)

// function useConteinerPlus() {
   
   
//     return ;
// }

// useConteinerPlus();

btn.addEventListener("click", (e) => {
    alert("fffff")
    // conteiner.ATTRIBUTE_NODE
     console.log(e , conteiner.ATTRIBUTE_NODE)
})

