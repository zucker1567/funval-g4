
let calcular = prompt("ingresar area a calcular cuadrado rectangulo o triangulo");



if(calcular=="cuadrado"){
    let cuadrado = parseInt(prompt("ingresar el lado del cuadrado"));
     let resultado = cuadrado*cuadrado;
    console.log("area de cuadrado es ", resultado)
} else if(calcular=="rectangulo") {
    let largo = parseInt(prompt("dame su largo"));
    let ancho = parseInt(prompt("dame su ancho"));
    resultado = largo*ancho
    console.log("el area de un rectangulo es ", resultado); 
} else if(calcular=="triangulo") {
    largo = parseInt(prompt("dame su largo"));
    ancho = parseInt(prompt("dame su base"));
    resultado = largo*ancho/2
    console.log("el area de un triangulo es ", resultado); 
}
else { console("ingresa dato valido")
}

