function calcularPago() {
    let nombre = document.getElementById("nombre").value;
    let horas = parseFloat(document.getElementById("horas").value);
    let pagoHora = parseFloat(document.getElementById("pagoHora").value);
    let resultado = document.getElementById("resultado");

    if (!nombre || isNaN(horas) || isNaN(pagoHora)) {
        resultado.style.color = "red";
        resultado.innerHTML = "Completa todos los campos.";
        return;
    }

    let salario = horas * pagoHora;

    // Bono del 20% si trabajs más de 160 hrs al mes
    if (horas > 160) {
        salario *= 1.2;
    }

    resultado.style.color = "#27ae60";
    resultado.innerHTML = `${nombre}, tu salario mensual es: $${salario.toFixed(2)}`;
}