var nombreUsuario = prompt("Por favor, introduce tu nombre:");

alert("¡Hola, " + nombreUsuario + "! Bienvenido.");

function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function concatenar(a, b) {
    return a.toString() + b.toString();
}
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}
function obtenerPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
}
let operacion = prompt("Ingrese que tipo de problema quiere solucionar (+, -, concat, /, %):");
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let resultado;
switch (operacion) {
    case "+":
        resultado = sumar(numero1, numero2);
        break;
    case "-":
        resultado = restar(numero1, numero2);
        break;
    case "concat":
        resultado = concatenar(numero1, numero2);
        break;
    case "/":
        resultado = dividir(numero1, numero2);
        break;
    case "%":
        resultado = obtenerPorcentaje(numero1, numero2);
        break;
    default:
        resultado = "Operación no válida";
}
let operacionRealizada = {
    tipo: operacion,
    numero1: numero1,
    numero2: numero2,
    resultado: resultado
};
let historialOperaciones = [];
historialOperaciones.push(operacionRealizada);

let operacionesSuma = historialOperaciones.filter(function(operacion) {
    return operacion.tipo === "+";
});
console.log("Resultado:", resultado);
console.log("Historial de operaciones:", historialOperaciones);
console.log("Operaciones de suma:", operacionesSuma);

alert(nombreUsuario + " tu respuesta esta en console, " + "presione Ctrl + Shift + L");