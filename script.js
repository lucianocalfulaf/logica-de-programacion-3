// factorialCalculator.js
function calcularFactorial(numero) {
    if (numero <= 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let numero;

do {
    let input = prompt("Ingrese un número:");

    // Verificar si el dato de entrada es un número
    if (!isNaN(input)) {
        numero = parseFloat(input);
        break;  // Salir del bucle si se ingresó un número válido
    }

    alert("Error: Debe ingresar un número válido.");

} while (true);  // Repetir hasta que se ingrese un número válido

const factorial = calcularFactorial(numero);

document.body.innerHTML = `<p>El factorial es: ${factorial}</p>`;
