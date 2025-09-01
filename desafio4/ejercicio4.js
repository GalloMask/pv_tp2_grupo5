// 4.- Crear una página que muestre 3 campos (input): Nombre, apellido, libreta universitaria. Crear un
// script para obtener cada uno de los elementos input creados, manipular los elementos para obtener su
// valor con la propiedad JS value y mostrar los datos con un alert de la siguiente forma: “Los datos
// ingresados son: Nombre: María Apellido: Diaz Libreta Universitaria: APU999999

let nombre = document.getElementById('nombreUsuario').value;
let apellido = document.getElementById("apellidoUsuario").value;
let num = document.getElementById("numLU").value;
let resultado = document.getElementById("resultado");

function obtenerDatos() {
    if( !nombre || !apellido || !num ){
        resultado.style.color = "red";
        resultado.innerHTML = "Completa todos los campos.";
        return;
    }
        alert(`Los datos ingresados son: Nombre: ${nombre}, Apellido: ${apellido}, Libreta Universitaria: ${num}`);
}