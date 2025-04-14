// Selecciona todos los botones y la pantalla
const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector(".pantalla");

let operacion = "";// Guarda la operación actual

// Recorre cada botón y le agrega un evento al hacer clic
botones.forEach(boton => {
    boton.addEventListener("click", () => {// Obtiene el texto del botón
        const valor = boton.textContent;

        if (valor === "=") {
             // Evalúa la operación y muestra el resultado
            try {
                operacion = eval(operacion);
                pantalla.textContent = operacion;
            
            } catch {
                pantalla.textContent = "Error";
                operacion = "";
                 // Si hay error (ej. sintaxis), muestra "Error"
            }
        } else if (valor === "C") {
            operacion = "";
            pantalla.textContent = "0";
            // Limpia todo

        } else if (valor === "⌫" || valor === "Borrar") {
             // Borra el último carácter
            operacion = operacion.slice(0, -1);
            pantalla.textContent = operacion || "0";

        } else {
              // Agrega el valor del botón a la operación
            operacion += valor;
            pantalla.textContent = operacion;
        }
    });
});
