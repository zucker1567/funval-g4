/* declarar funciones */
/* 
function llama (){
    console.log("hola")
}
 llama();



function saludar(){
    let nombre = prompt("ingresa tu nombre");
    let saluda = "hola "+ nombre; 
    console.log(saluda)
}

 saludar() */

/*  let datoUsuario = prompt("ingresa tu palabra");

function invertir(letra) {
  return letra.split('').reverse().join('');
  if (letra&& letra ){
    console.log(letra);
   }else(("eso no es igual viejo"));
}


console.log(invertirPalabra("")); */

// Precios individuales de los 5 platos
let plato1 = 25;
let plato2 = 30;
let plato3 = 20;
let plato4 = 22;
let plato5 = 35;


let total = plato1 + plato2 + plato3 + plato4 + plato5;


if (total > 120) {
  let descuento = total * 0.05;
  total = total - descuento;
  console.log("Se aplicó un descuento del 5%.");
}


console.log("Total a pagar: $" + total);




