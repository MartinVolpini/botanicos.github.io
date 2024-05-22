"use strict";


// ---------------            ------------------             -----------------             -------------
let logo = document.querySelector( ".nav--logo" ) 
let whatsapp = document.getElementById("btn--whatsapp")

// console.log( logo , whatsapp )
function callback(entries){

    entries.forEach( entry=>{
        if(entry.isIntersecting){  
            // console.log(entry.target + " Es intersectado") 
            whatsapp.style.visibility= "hidden"; 
        } else if( !entry.isIntersecting ){ whatsapp.style.visibility= "visible";  }
    })
    
}

const mirar = new IntersectionObserver( callback )

mirar.observe(logo);


