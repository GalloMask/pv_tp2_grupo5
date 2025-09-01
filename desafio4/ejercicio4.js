// 4.- Crear una página que muestre 3 campos (input): Nombre, apellido, libreta universitaria. Crear un
// script para obtener cada uno de los elementos input creados, manipular los elementos para obtener su
// valor con la propiedad JS value y mostrar los datos con un alert de la siguiente forma: “Los datos
// ingresados son: Nombre: María Apellido: Diaz Libreta Universitaria: APU999999




function obtenerDatos() {
    let nombre = document.getElementById('nombreUsuario').value;
    let apellido = document.getElementById("apellidoUsuario").value;
    let num = document.getElementById("numLU").value;
    let resultado = document.getElementById("resultado");

    if( !nombre || !apellido || !num ){
        resultado.style.color = "red";
        resultado.innerHTML = "Completa todos los campos.";
        return;
    }

    resultado.style.color = "green";
    resultado.innerHTML = "";

        alert(`Los datos ingresados son:\n Nombre: ${nombre}\n Apellido: ${apellido}\n Libreta Universitaria: ${num}`);
}