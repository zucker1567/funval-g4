/* ARRAYS */

/* COMO SE DECLARA ARRAYS */
let nuevoArray = ["kevin","pablo","johan","geraldine","gabriel",22,true,false];
/* accdeder a los valores de un array */
console.log(nuevoArray[2]);
nuevoArray[0]= "andrew"
console.log(nuevoArray);
/* Metodos BASICOS DE LOS ARRAYS */
nuevoArray.push("yamila")//agrega elementos al final .push
console.log(nuevoArray);
/*  .unshift*/
nuevoArray.unshift("benjamin","douglas");//agrega datos al principio de la fila
console.log(nuevoArray);


/* metodos para eliminar elementos de un array */

let ultimoEstudiante = nuevoArray.pop();//elimina el ultimo elemento
let primerEstudiante = nuevoArray.shift();//elimina el primer elemento
console.log(primerEstudiante);
console.log(ultimoEstudiante);

console.log(nuevoArray);

let largo = nuevoArray.length;
console.log(largo);

/*ARRAY QUE VEO ARRAY QUE ITERO  */

for (let index = 0; index < nuevoArray.length; index++) {
    console.log(nuevoArray[index]);
}

let matriz = [28,39,90,89,]
/* let aa = matriz.length
console.log(aa);
 */
function corrido() {
    for (let i = 0; i < matriz.length; i++) {
        matriz[i] += matriz[i];
        let element =matriz[i]
        console.log(element);
    }
}
corrido(matriz)


let notas1 = [10,20,30,40] 
let notas2 = [10,50,20,40]
let notas3 = [10,60,70,80]
let notas4 = [10,40,60,20]

function calcularpromedio(notas) {
    let suma =0;

    for (let i = 0; i < notas.length; i++) {
            suma += notas[i];
    }
    
    let promedio = suma /notas.length;
    
    return promedio
}

console.log("promedio 1 =", calcularpromedio(notas1));
console.log("promedio 1 =", calcularpromedio(notas2));
console.log("promedio 1 =", calcularpromedio(notas3));
console.log("promedio 1 =", calcularpromedio(notas4));


