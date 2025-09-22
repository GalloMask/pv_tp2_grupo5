document.addEventListener('DOMContentLoaded', function() {
    const inputString = document.getElementById('inputString');
    const processButton = document.getElementById('processButton');
    const result = document.getElementById('result');

    processButton.addEventListener('click', function() {
        const input = inputString.value.trim();
        
        if (input === '') {
            result.textContent = 'Por favor ingresa una cadena';
            return;
        }

        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (char !== '?' && (char < '0' || char > '4')) {
                result.textContent = 'Solo se permiten dígitos del 0 al 4 y signos de pregunta';
                return;
            }
        }

        const resultado = procesarCadena(input);
        result.textContent = resultado;
    });

    function procesarCadena(cadena) {
        let resultado = '';
        
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === '?') {
                let suma = 0;
                
                if (i > 0 && cadena[i-1] >= '0' && cadena[i-1] <= '4') {
                    suma += parseInt(cadena[i-1]);
                }
                
                if (i < cadena.length - 1 && cadena[i+1] >= '0' && cadena[i+1] <= '4') {
                    suma += parseInt(cadena[i+1]);
                }
                
                resultado += suma.toString();
            } else {
                resultado += cadena[i];
            }
        }
        
        return resultado;
    }

    inputString.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            processButton.click();
        }
    });
});