function reemplazarCadena(cadena) {
  let arr = cadena.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "?") {
      let izquierda = i > 0 && !isNaN(arr[i - 1]) ? parseInt(arr[i - 1]) : 0;
      let derecha = i < arr.length - 1 && !isNaN(arr[i + 1]) ? parseInt(arr[i + 1]) : 0;
      arr[i] = (izquierda + derecha).toString();
   }
 }
      return arr.join("");
}

function procesarCadena() {
    let cadena = document.getElementById("cadena").value;
    let resultado = reemplazarCadena(cadena);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}