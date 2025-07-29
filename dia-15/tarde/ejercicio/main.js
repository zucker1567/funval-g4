const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];
/*  Mostrar todos los productos en una lista.
Cada producto debe mostrar:
Nombre
Precio
Stock disponible
Botón "Comprar"*/

/* for (let index = 0; index < productos.length; index++) {
    const element = producto[index];
    
} */


    let a = 5;  //a se guarda en 5
    a = a+5    //a ya tiene un espacio en memorio ocupado que es 5 en a+5 
    // y este se guarda en a por que es una variable let 



    
    console.log(a)

    
    a = 10;
    a= a+10;
    console.log(a)

    let b = 30;
    console.log(b)
    b = b+a

    console.log(b)

    if(b>=18){
        console.log("eres mayor de edad");
        
    }else if (b>65){
        console.log("eres adulto mayor");
        
    }else{
        console.log("eres adolecente");
        
    }