function calcularPromedio() {
  const a = Number(prompt("Numero entero a:"));
  const b = Number(prompt("Numero entero b:"));
  const c = Number(prompt("Nmero entero c:"));

  const promedio = (a + b + c) / 3;
  alert(`El promedio de ${a}, ${b} y ${c} es: ${promedio}`);
}

document.getElementById("btn").addEventListener("click", calcularPromedio);