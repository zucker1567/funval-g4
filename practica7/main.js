
const productos = [
   { nombre: "Laptop", precio: 1200,},
   { nombre: "Mouse", precio: 25,  },
   { nombre: "Teclado", precio: 50, },
   { nombre: "Monitor", precio: 300,  },
   { nombre: "Silla Gamer", precio: 450,  },
   { nombre: "Audífonos", precio: 80,  },
   { nombre: "Webcam", precio: 60,  },
   { nombre: "USB 128GB", precio: 30,  },
   { nombre: "Impresora", precio: 200,  },
   { nombre: "Tablet", precio: 500,  }
]; 


let contenedor = document.querySelector("#contenedor");

const imagenes= [
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3778a529/images/large/28137559.jpg?sw=1200&sh=1200&sm=fit",
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1db156e/images/large/19589706.jpg?sw=1200&sh=1200&sm=fit",
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw25453690/images/large/28037910.jpg?sw=1200&sh=1200&sm=fit",
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw312704e3/images/large/28030681.jpg?sw=1200&sh=1200&sm=fit",
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2b6094e7/images/large/25321588.jpg?sw=1200&sh=1200&sm=fit",
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw033deae6/images/large/28133383.jpg?sw=1200&sh=1200&sm=fit",
   "https://www.abc.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa25300bf/images/large/28378432.jpg?sw=400&sh=400&sm=cut",
   "https://media.spdigital.cl/thumbnails/products/aavzq_dz_b58a2077_thumbnail_512.jpg",
   "https://assets.pcfactory.cl/public/foto/48534/1_200.jpg?t=1753938776",
   "https://images.lider.cl/wmtcl?source=url%5Bfile%3A%2Fproductos%2F4715265ab.jpg%5D&scale=size%5B180x180%5D&sink=format%5Bwebp%5D",
];


productos.forEach((productos,index)=>{
   contenedor.innerHTML += `
   <div class="w-full max-w-sm items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
         <img class="p-8 rounded-t-lg" src="${imagenes[index]} " alt="product image" />
      </a>
   <div class="px-5 pb-5">
      <a href="#">
         <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${productos.nombre}</h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
         <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
         </div>
         <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
      </div>
      <div class="flex items-center justify-between">
         <span class="text-3xl font-bold text-gray-900 dark:text-white">${productos.precio}</span>
         <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
         </div>
      </div>
   </div>`
   }
);

productos.forEach((productos)=>{
   console.log(productos.precio);
   }
);

let productosDisponibles = productos.map(p=> p.nombre);
console.log(productosDisponibles);

let productoBuscado ="Laptop";
const estaDisponible = productosDisponibles.includes(productoBuscado);


console.log(`${productoBuscado} disponible: ${estaDisponible}`);

/* descuenta 10% */
const productosConDescuento = productos.map((p) => {
   return {
      nombre: p.nombre,
      precioOriginal: p.precio,
      precioDescuento: p.precio * 0.90 // Aplica el 10% de descuento
   };
});

console.log(productosConDescuento);


function vericarDisponibilidad(nombreBuscado) {
   let nombres = productos.map(p=>p.nombre);
   return nombres.includes(nombreBuscado);
}

console.log(vericarDisponibilidad("Laptop"));



let productosEconomicos = productos.filter(producto => producto.precio <= 99);
productosEconomicos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
});



const primerosProductos = productos.slice(0, 3);
primerosProductos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

let productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
productosOrdenados.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});




const productosInvertidos = [...productos].reverse();
productosInvertidos.forEach(producto => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});