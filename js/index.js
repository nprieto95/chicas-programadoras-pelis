// var numeroNumber = 1;
// var numeroString = '1';

// if (numeroNumber === 1) {
//     alert("numeroNumber es igual a 1");
// } else {
//     alert("incorrecto");
// }

// var showWelcomeMessage = true;
// var welcomeMessage = "Welcome to my website!";

// if (showWelcomeMessage) {
//     alert(welcomeMessage);
// } else {
//     console.log("testing");
// }


var edad = null;

do {
    if (edad !== null) {
        alert("Por favor, ingrese un numero")
    }
    edad = prompt("Ingresá tu edad");
} while (!Number(edad));


if (Number(edad)) {
    if (edad >= 10 && edad <= 14) {
        alert("Edad entre 10 y 14")
    } else if (edad > 14) {
        alert("Edad mayor a 14")
    } else if (edad < 10) {
        alert("Edad menor a 10");
    } else {
        alert("ninguna opcion anterior")
    }  
}