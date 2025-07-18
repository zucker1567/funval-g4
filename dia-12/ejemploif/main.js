let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?');
if (year < 2015) {
  alert( 'Muy poco...' );
  console.log("Muy poco...")
} else if (year > 2015) {
    console.log("Muy Tarde")
  alert( 'Muy Tarde' );
} else {
    console.log("esto exacto",year  )    /* como 2015 no es mayor a igual a 2015 me da falso */

  alert( '¡Exactamente!' );
}