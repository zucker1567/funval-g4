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




/*   switch (opcion) {
        case 1:
            let ingreso = parseFloat(prompt("¿Cuánto deseas ingresar?"));
        if (!isNaN(ingreso) && ingreso > 0) {
            saldo += ingreso;
            alert("Ingreso exitoso. Nuevo saldo: $" + saldo);
        } else {
            alert("Cantidad inválida.");
        }
        break;

        case 2:
            let retiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
        if (!isNaN(retiro) && retiro > 0) {
            if (retiro <= saldo) {
            saldo -= retiro;
                alert("Retiro exitoso. Nuevo saldo: $" + saldo);
            } else {
                alert("Fondos insuficientes.");
            }
        } else {
            alert("Cantidad inválida.");
        }
        break;

        case 3:
        alert("Saldo disponible: $" + saldo);
        break;

        case 4:
            alert("Gracias por usar tu cuenta bancaria.");
        break;

        default:
            alert("Opción no válida.");
    }
 */
  // iniciamos la variable fuera del bucle
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
    // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras ,"segundos");
}