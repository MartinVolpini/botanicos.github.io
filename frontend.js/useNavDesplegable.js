"use strick";
 //------------------ HEADER DESTRABADO----------------------
const header = document.querySelector(".header");
const btns = document.querySelectorAll(".hd--btn");

// header.style.position = "relative" ;


// btns.forEach(elemento => { 
//     elemento.addEventListener("click",()=>{  
//         header.style.position = "relative" ;
//      })
//  } )

 //------------------ NAV DESPELGABLE----------------------

 const nav_burger = document.querySelector(".nav-toggle");
 const nav_items  = document.querySelectorAll(".nav-items");
 
 let watching = matchMedia("(max-width:820px)")
 let interruptor = true;

 nav_burger.addEventListener("click",(e)=>{
    
    // alert("!!!!")

    // e.preventDefault
    // header.style.position = "relative" ;
    
    if(interruptor == true && watching.matches == false) { 
        document.querySelector(".nav-ul").style.transform =  "translateX( -320px)"
        interruptor = false;
    } 
    else if(interruptor == false && watching.matches == false)  { 
        document.querySelector(".nav-ul").style.transform =  "translateX(320px)"
        interruptor = true;
        
    }
    else if (interruptor == true && watching.matches == true) { 
        document.querySelector(".nav-ul").style.transform =   "translateX(-100%)" //"translateX(-100%)"
        interruptor = false;
       
    } 
    else if (interruptor == false && watching.matches == true) {
        document.querySelector(".nav-ul").style.transform =  "translateX(0%)"
        interruptor = true;
        
    }
  
 })

 nav_items.forEach(elemento => { 

    elemento.addEventListener("click",()=>{ 


        console.log( watching.matches , elemento )

        // alert("nav_items")

        if (watching.matches == true) { 
            document.querySelector(".nav-ul").style.transform =  "translateX(100%)" //"translateX(0%)"
            interruptor = true;
        } 
        else if (watching.matches == false) { 
            document.querySelector(".nav-ul").style.transform =  "translateX(0%)" //"translateX(320px)"
            interruptor = true;
            
        }
     })
 } )
