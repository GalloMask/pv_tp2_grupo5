function leerEntero(mensaje) {
    while (true) {
    const entrada = prompt(mensaje);
    if (entrada === null) throw new Error("Operación cancelada");
    const n = Number(entrada);

    if (Number.isInteger(n)) return n;

    alert("Debe ser un numero entero");
    }
}

function calcularPromedio() {
    try {
    const a = Number(prompt("Numero entero a:"));
    const b = Number(prompt("Numero entero b:"));
    const c = Number(prompt("Nmero entero c:"));

    const promedio = (a + b + c) / 3;
    alert(`El promedio de ${a}, ${b} y ${c} es: ${promedio}`);
} catch (e) {
    alert(e.message);
    }
}

document.getElementById("btn").addEventListener("click", calcularPromedio);