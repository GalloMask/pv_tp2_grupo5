// 2.- Solicitar al usuario que ingrese tres números enteros, luego mostrar como resultado el promedio de
// los tres. El promedio de tres números se calcula sumando los tres números y dividiendo entre 3.
    
function calcularPromedio() {
    const num1 = parseFloat(prompt("Ingresa el primer numero..")); 
    const num2 = parseFloat(prompt("Ingresa el segundo numero.."));
    const num3 = parseFloat(prompt("Ingresa el tercer numero.."));

    const calcular = (num1+num2+num3) / 3;
    alert(`El promedio de ${num1}, ${num2} y ${num3} es: ${calcular.toFixed(2)}`);
}