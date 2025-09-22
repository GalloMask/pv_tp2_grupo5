/*
 1.- Declarar una función con nombre calcularMayor() y pasarle como parámetros (numero1, numero2).
 Dentro de la función mostrar un alert que diga cuál de los números ingresados es mayor. En caso de ser
 iguales, tendrá que indicarlo a través de un alert también. Invocar la función y enviar los argumentos
 con diferentes números para probar.
*/

function calcularMayor(numero1, numero2){
    if(numero1>numero2){
        alert (`Es mayor ${numero1} que el numero ${numero2}`);
    } else if(numero2>numero1){ 
        alert (`Es mayor ${numero2} que ${numero1}`);
    } else{ 
        alert(`Los numeros son iguales`);
    }
}

function ejercicio(){ 
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    const resultado = calcularMayor(num1, num2);
    
}