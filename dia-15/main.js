/* como se declarar un array */

/* const noCambia =["johan","kevin","pablo","gabriel"]; */ /* pero si se puede mutar los array */
/* noCambia.push("javier"); */ /* mutamos añadiendo un objeto a la const al final */
/* console.log(noCambia); */


/* let nuevoArray =["johan","kevin","pablo","gabriel"]; */




/* console.log(nuevoArray[2]);


nuevoArray.push["geraldo"]; */ /* esta mal son con () que se agregan a array*/

/* console.log(nuevoArray); */


/* los array no son la mas eficiente para manejar tipos de estructura de datos */

/* metodos basicos de los array */
//metodos para agregar elementos de un array

/* let contador =nuevoArray.push("geraldo"); */
/* se agrega al final del array  metiendo en una variable te muestra directo la cantidad */
/* console.log(contador); */


/* nuevoArray.unshift("javie","fabrizio"); *//* este metodo agrega al principio de nuestro array */

/* console.log(nuevoArray); */

//metodos para eliminar elementos de un array

/* let ultimoEstudiante = nuevoArray.pop */
/* console.log(nuevoArray); */


//metodos para ver la cantidad de elementos en nuestro array
/* let largo = nuevoArray.length; */
/* console.log(largo); */


/* let i = 0;

while(i>nuevoArray.length){
    console.log(nuevoArray[0]);
    i++;
}
 */

/* 
let notas =[30,40,50,40];
    for (let i; i>notas.length;)

  console.log(notas.length);
   */

let matriz = [
    [28,39,90,89],
    [70,32,28,18],
    [10,0,15,31],
    [11,23,45,67],
]
function corrido(matriz){
for (let index = 0; index < matriz.length([0[1]]); index++) {
    let element = matriz[index];
    
}
    return element
}


/* let estudiantess = {
    genero :"Masculino"
}
console.log(estudiante);

let estudiante= [{ 
    
    nombre:"johan",
    edad: 25,
    nacionadlidad: "peru",
    esMienbro: 3535,
    notas: [32,54.21,12],
    
},{
    nombre:"camilo",
    edad: 21,
    nacionadlidad: "peru",
    esMienbro: 3536,
    notas: [32,54.21,12],
},,{
    nombre:"geraldo",
    edad: 22,
    nacionadlidad: "peru",
    esMienbro: 3537,
    notas: [32,54.21,12],
}   ]; */

let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts /

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}

/ mostrar a todos los estudiantes q sean de Argentina */

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65&& listaEstudiantes.nacionalidad === "argentina") {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}


