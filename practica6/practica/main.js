let saldo = 0;
let opcion;

do {
    opcion = parseInt(prompt(
    "Elige una opción:\n1. Ingresar dinero\n2. Retirar dinero\n3. Consultar saldo\n4. Salir"
    ));

    switch (opcion) {
        case 1:
            let ingreso = parseFloat(prompt("¿Cuánto deseas ingresar?"));
        if (!isNaN(ingreso) && ingreso > 0) {
            saldo += ingreso;
            alert("Ingreso exitoso. Nuevo salgo: $" + saldo);
        } else {
            alert("Cantidad inválida.");
        }
        break;

        case 2:
            let retiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
        if (!isNaN(retiro) && retiro > 0) {
            if (retiro <= saldo) {
            saldo -= retiro;
                alert("Retiro exitoso. Nuevo saldo: $" + saldo);
            } else {
                alert("Fondos insuficientes.");
            }
        } else {
            alert("Cantidad inválida.");
        }
        break;

        case 3:
        alert("Saldo disponible: $" + saldo);
        break;

        case 4:
            alert("Gracias por usar tu cuenta bancaria.");
        break;

        default:
            alert("Opción no válida.");
    }
    } while (opcion !== 4);
