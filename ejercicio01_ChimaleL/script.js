/*
Script de js para agregar la funcion de mostrar un resultado
luego de ingresar nuestro nombre, horas al mes, y pago por hora
para luego pasar por una ecuacion que nos devolvera el salario mensual del estimado
*/

function mostrarResultado(){
    let nombre = document.getElementById("nombre").value;
    let horas = parseFloat(document.getElementById("horas").value);
    let pagoHoras = parseFloat(document.getElementById("pagoHoras").value);
    let resultado = document.getElementById("resultado");

    if(!nombre || isNaN(horas) || isNaN(pagoHoras)){
        resultado.style.color = "red";
        resultado.innerHTML = "Completa todos los campos";
        return
    }

    let salario = horas * pagoHoras;

    if(horas > 160){
        salario *= 1.2;
    }

    resultado.style.color = "green";
    resultado.innerHTML = `${nombre}, tu salario mensual es: ${salario.toFixed(2)}`;
}