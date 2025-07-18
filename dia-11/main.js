/* tipos de datos, string */
let nombre = "johan";
console.log(nombre);
let apellido = "Rodriguez";

/* number */
let edad = 25;

/* booleano */
let adulto = true;
/* bigint */
let numeroGrande = 1234567891011121314151617181920n;
let bigNumber = BigInt(546213216316541);
/* undifined */
let indefinido;
/*  null */
let nulo = null;
/* symbol */
let simbolo = Symbol;
/* concatenacion */
let nombreCompleto = nombre+ " " +apellido;

console.log(nombreCompleto, numeroGrande ,bigNumber, indefinido,adulto, simbolo,nulo);

console.log(typeof nombre, typeof numeroGrande, typeof bigNumber,  typeof indefinido,);

/* OPERADORES DE Comparacion */
let a= 6;
let b = 4;

let comparar;
comparar = a != b;
comparar = a !== b;
comparar = a == b;
comparar = a === b;
comparar = a > b;
comparar = a < b;
comparar = a >= b;
comparar = a <= b;

/* console.log (comparar); */


/* comentario en una linea */

/* 
comentarios 
en varias lineas
aaaaaaaaaaaa
aaaaaaaaaaaa
aaaaaaaaaaaa
 */

nombre= "javier";
apellido = "carcamo";
edad = 30;
adulto = false;
numeroGrande = 55555555555555555555555555555n;
indefinido = "definido";

console.log(nombre, apellido, numeroGrande ,bigNumber, indefinido,adulto, simbolo,nulo);

let cuentabanco =numeroGrande;

const todo =  nombre+ " " + apellido+ " "  +edad+ " " +adulto+ " "+cuentabanco; /* hay que ser especifico en la concatenacion si no sale error */


/* operadores logicos */
 a= 4;
 b = 2;
let resultado;
let resultado2;
let resultado3;
let resultado4;
let resultado5;

resultado = a + b ; 
console.log (resultado);
resultado2 = a - b ; 
console.log (resultado2);
resultado3 = a * b ;
console.log (resultado3);
resultado4 = a / b ;
console.log (resultado4);
resultado5 = a ** b ;
console.log (resultado5);

a ++;
console.log(a);
a *=2;
console.log(a);
a /=2;
console.log(a);
a **=3;
console.log(a);


/* operador ternario  */

a = 2;
b = 7;
console.log(a, b);
a<b
    ? console.log("a es menor que b")
    :console.log("b es mayor que a")
    ; /* IF abreviado o condicional de una sola linea se le llama */



    /* se ejecuta atraves de  ? si es verdader se ejecuta codigo asignado 
    : si es falso se ejecuta su codigo
    */

/* permiso */

edad = 18;



edad>=17
    ? console.log("puedes entrar ")
    : console.log("no puedes entrar");




let usuario = "johan"
let admin =prompt("ingresa tu UserName");
let password = prompt("ingresa tu contraseña");



  /*   (usuario==admin) && (password==1234)
    ? console.log("administrador")
    : console.log("user name incorrect")
    
    ? console.log(usuario,"administrador")
    : console.log("contraseña incorrecta")
    ;
     */
   /*  (usuario == admin)&(password===1234 )
        ? console.log("hola ",usuario, "pase")
        : console.log("contraseña incorrecta")
        ? console.log("correcto")
        : console.log("datos incorrectos") ; */


let acceso = admin== usuario 
        ? console.log(usuario, "usuario correcto")
        :console.log("usuario incorrecto");
        password ==1234 /* == operador de comparacion de dato, mas no DEL TIPO DE DATO!!! */
        ? console.log("contraseña correcta")
        :console.log("contraseña incorrecta")
        ;


        var concatenacionCadenas = 12 + "3"; // Resultado: «123» esta concatenando el numero 3 mas no sumandolo
        console.log(concatenacionCadenas);
        

        let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

        if (year == 2015) { alert( '¡Estás en lo cierto!' )  
          console.log("sos un genio boludo")
        }
        else {
          console.log("naguara")
        };
