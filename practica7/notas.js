
/* for (let i = 0; i < productos.length; i++) {
   let array = productos [i];
   console.log(array);
   caja.innerhtml += array[i]
} */

/* productos.forEach((productos)=>{
   console.log(productos.nombre);
   }
);
 */


/* sintaxis mala $ 
   productosDisponibles.includes((productos)=>productos.nombre$["lapto"]); 

hay un error de sintaxis con productos.nombre$["lapto"]
*/






//practica codigo bueno
/* productos.forEach((productos)=>{
   console.log(productos.precio);
   }
);

let productosDisponibles = productos.map((productos)=>productos.nombre);
console.log(productosDisponibles);


let estaDisponible = productosDisponibles.includes(("Laptop"))
   console.log(estaDisponible); */

let Disponible = productos
function buscarProductos(producto) {
Disponible = productos.map(p => p.nombre)
return Disponible.includes(producto)
}

console.log(buscarProductos());


//lo mismo de distintas maneras 
let productoBuscado ="Laptop";
const estaDisponible = productosDisponibles.includes(productoBuscado);

console.log(`${productoBuscado} disponible: ${estaDisponible}`);



function vericarDisponibilidad(nombreBuscado) {
   let nombres = productos.map(p=>p.nombre);
   return nombres.includes(nombreBuscado);
}

console.log(verificarDisponibilidad("Tablet"));