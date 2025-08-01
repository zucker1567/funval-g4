/* console.log("Preparando la ensalada")
console.log("corto tomate ")
console.log("corto lechuga")
console.log("aliño")
console.log("corto limon")
console.log("corto sal")
console.log("listo")


console.log("hola mundo xd");

function cocinarArroz() {
    console.log("Empezando a cocinar el arroz...");

    setTimeout(() => {
    console.log("El arroz está listo");
    servirComida(); // Se llama después
  }, 5000); // tarda 5 segundos en cocinarse
}


function servirComida() {
    console.log("La comida está servida!");
}

function prepararComida() {

  cocinarArroz();      // Se inicia la cocina del arroz
}

prepararComida(); */


let peliculas = [
    {
        titulo:"spiderman",
        año:2002,
        genero:"accion",
    },
    {
        titulo:"Tarzan",
        año:2001,
        genero:"infantil",
    },
    {
        titulo:"Hercules",
        año:2003,
        genero:"infantiles",
    },
];

//CREANDO UNA PROMESA
const datos = new Promise((resolve, reject) => {
        setTimeout(() => {
            let cumplido = true;
    if(cumplido) {
        resolve(peliculas);
    } else {
        reject("el servidor esta caido");
    }
            
    }, 5000);
    
});

//COMSUMIR PROMESA
/* datos.then((datos)=>{
    console.log(datos);
    
}).catch((err)=>{
    console.log(err);
    
})
 */


///CONSUMIR  PROMESA CON AYNSC/AWAIT
async function pepitoPerez(){
    let peliChidas = await datos;
    console.log(peliChidas);
    
}

pepitoPerez()

