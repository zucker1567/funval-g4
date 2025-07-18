/* let operacion = parseInt(prompt("que operacion deseas hacer 1.ingresar dinero 2. retirar dinero 3.consultar saldo"));
let ingresa;

if (operacion ==1) {
    ingresa = parseInt(prompt("ingresa tu dinero"));
    console.log("ingresaste ",ingresa);
    operacion = parseInt(prompt("que operacion deseas hacer 1.ingresar dinero 2. retirar dinero 3.consultar saldo"))

} else if (operacion ==2) {
     ingresa = parseInt(prompt("retira tu dinero"));
     
} else if (operacion ==3) {
     ingresa = parseInt(prompt("consultar tu saldo"));
} */
/* let operacion = prompt("deseas repetir el bucle")
let ingresa;

while (operacion=="si"){
    operacion  = prompt("ingresa")
    if(operacion==1 ){
        ingresa=parseInt(prompt("ingresa tu dinero"));
        alert("Operacion exitosa");
        
    }
} */
/* let resultado =7 > 8 && 7 < 10;
console.log(resultado) */


/* const edad = 17
const tieneCarnet = true

if (edad >= 18) {
    if (tieneCarnet) {
    console.log('Puedes conducir')
    } else {
    console.log('No puedes conducir')
    }
    } else {
  console.log('No conducir')
    } */

  // iniciamos la variable fuera del bucle
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
    // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras ,"segundos");
}