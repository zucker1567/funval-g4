/* function sumar() {
    return 1+1
    
}

console.log(sumar());


let multiplicar =(a,b) => {
    return a*b
}


console.log(multiplicar (2,6));



let duplicar = (x) =>  {  return x*2; }

console.log (duplicar(4)); */




let sumar = parseInt(prompt("elije la 1 opcion 1sumar 2restar 3multiplicar 4odividir")) 
 let resultado;

 if (sumar == 1) {
    resultado = (a,b) => a+b;

    console.log (resultado (5,6)); 
    }   else if (sumar==2) {
    
        resultado = (a,b) => a-b;

        console.log (resultado (5,6));
    }   else if(sumar==3) {
        resultado = (a,b) => a*b;

        console.log (resultado (5,6));
    }   else if(sumar==4){
        resultado = (a,b) => a/b;

        console.log (resultado (5,6));
    }   else {
            console.log("Opción inválida");
        }


/* opcion optimizadad de copilot */

/* let opcion = parseInt(prompt("Elige una opción: 1-sumar, 2-restar, 3-multiplicar, 4-dividir"));
let resultado;

if (opcion === 1) {
    resultado = (a, b) => a + b;
} else if (opcion === 2) {
    resultado = (a, b) => a - b;
} else if (opcion === 3) {
    resultado = (a, b) => a * b;
} else if (opcion === 4) {
    resultado = (a, b) => a / b;
}

if (resultado) {
    console.log(resultado(5, 6));
} else {
    console.log("Opción inválida");
}
 */

/* let resultado;

if (numero == 1) {
  resultado = (a, b) => a * b;
  console.log(resultado(2, 2));
} else if (numero == 2) {
  resultado = (a, b) => a + b;
  console.log(resultado(5, 6));
} else if (numero == 3) {
  resultado = (a, b) => a - b;
  console.log(resultado(5, 6));
} else if (numero == 4) {
  resultado = (a, b) => a / b;
  console.log(resultado(5, 6));
} else {
  console.log("Opción inválida");
} */
