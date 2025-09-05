/*
4.- Crear una página que muestre 3 campos (input): Nombre, apellido, libreta universitaria. Crear un
script para obtener cada uno de los elementos input creados, manipular los elementos para obtener su
valor con la propiedad JS value y mostrar los datos con un alert de la siguiente forma: “Los datos
ingresados son: Nombre: María Apellido: Diaz Libreta Universitaria: APU999999

*/

function mostrarDatos() {
      let nombre = document.getElementById("nombre").value.trim();
      let apellido = document.getElementById("apellido").value.trim();
      let libreta = document.getElementById("libreta").value.trim();

      // Validar que nombre y apellido solo tengan letras
      let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      if (!soloLetras.test(nombre)) {
        alert("El nombre debe contener solo letras.");
        return;
      }
      if (!soloLetras.test(apellido)) {
        alert("El apellido debe contener solo letras.");
        return;
      }

      // Validar que la libreta tenga solo números
      let soloNumeros = /^[0-9]+$/;
      if (!soloNumeros.test(libreta)) {
        alert("La libreta universitaria debe contener solo números.");
        return;
      }

      // Si todo está bien, mostramos los datos
      alert("Los datos ingresados son:\nNombre: " + nombre + 
            "\nApellido: " + apellido + 
            "\nLibreta Universitaria: " + libreta);
    }