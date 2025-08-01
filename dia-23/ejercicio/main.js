/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];

//CREANDO UNA PROMESA//try cha
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con inerHTML EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
    el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc 
*/

async function cosumir (){
    let estudiantes = await listaEstudiantes;
    console.log(estudiantes);
}

cosumir();
let caja = document.querySelector("#caja");

caja.innerHTML = "";
for (let i = 0; i < estudiantes.length; i++) {
    caja.innerHTML += `
        <div class="bg-amber-400 text-white p-2 rounded-2xl m-4">${estudiantes[i].notas}notas de los estudiantes</div>
        `
}

function calcularPromedio(){
    
}
