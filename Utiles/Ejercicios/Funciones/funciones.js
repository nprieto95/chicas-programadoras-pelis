// function prueba(texto){
//     alert(texto)
//     // return 1
// }

// prueba("texto de prueba")

let operando1 = null
let operando2 = null
let operador = null

do {
    if (operando1 !== null) {
        alert("Por favor, ingrese un numero")
    }
    operando1 = prompt("ingrese el primer numero de la operacion");
} while (!Number(operando1));

do {
    if (operando2 !== null) {
        alert("Por favor, ingrese un numero")
    }
    operando2 = prompt("ingrese el segundo numero de la operacion");
} while (!Number(operando2));

do {
    if (operador !== null) {
        alert("Por favor, ingrese una operacion")
    }
    operador = prompt("ingrese una operacion matematica");
} while (operador !== "sumar" && operador !== "restar" && operador !== "multiplicar" && operador !== "dividir");


function calcular(operador, operando1, operando2){
    let operando1Int = parseInt (operando1)
    let operando2Int = parseInt (operando2)
    switch(operador){
        case "sumar":
        return operando1Int + operando2Int;
        case "restar":
        return operando1Int - operando2Int;
        case "multiplicar":
        return operando1Int * operando2Int;
        case "dividir":
        return operando1Int / operando2Int;
    }
}
console.log(calcular(operador, operando1, operando2))