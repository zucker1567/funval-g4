let johan = 25;
let dinero = prompt("cuanto tienes para viajar");


if (dinero >= 4000){
    console.log("welcome to italia")
    }
else {
    console.log("no tienes suficiente dinero para viajar")
};



let permisoMama = false;
let permisoPapa = true;
edad = 28;

/* if (edad >= 18) {
    if (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
    } else {
    console.log("me quedo en casa");
    }
} else {
    console.log("me quedo en casa");
} */

    (permisoMama && permisoPapa) || edad>=18

   /*  ? console.log("tienes permiso ")
    :console.log("no tienes permiso"); */


    if ((permisoMama ||permisoPapa) &&  edad>=18)
    {
    console.log("puedo salir a bailar");
    } 
    else {
    console.log("me quedo en casa");
    }
    
    

    let añosdeVida = prompt("cuantos años tienes");

   if ((añosdeVida)){
    let vida = (añosdeVida*365)
    console.log("tienes ",vida, "de vida")
   };
   