alert (mayorEdad (Number(prompt ("Ingresa tu edad"))));

function mayorEdad (edad) {
            if (edad>=0) {
                resultado = edad >= 18 ? "eres mayor de edad" : "eres menor de edad";
                return resultado;
            }
            else {
                return "Ingresa un dato correcto";
            }
            
        }
        