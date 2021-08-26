

// let edad = prompt("ingrese su edad");

// if(Number(edad)){
//     if(edad >= 18){
//         alert("Sos mayor de edad, estas habilitado a votar");
//     } else if(edad <= 15){
//         alert("Sos menor de edad, volve para tu casa");
//     } else {
//         alert("Podes votar, pero es opcional");
//     }
// }

// else{
//     if(edad >= 18){
//         alert("Sos mayor de edad, estas habilitado a votar");
//     } else if(edad <= 15){
//         alert("Sos menor de edad, volve para tu casa");
//     } else {
//         alert("Podes votar, pero es opcional");
//     }
// }

let edad = null;

do {
    if (edad !== null) {
        alert("Por favor, ingrese un numero")
    }
    edad = prompt("Ingresá tu edad");
} while (!Number(edad));


    if (edad >= 16 && edad < 18) {
        alert("Podes votar, pero es opcional, gracias por ayudar al pais")
    } else if (edad >= 18) {
        alert("Sos mayor, podes votar")
    } else if (edad <= 15) {
        alert("Sos menor, volve a tu casa");
    } else {
        alert("ninguna opcion anterior")
    }  
