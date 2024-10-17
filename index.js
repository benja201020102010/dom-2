let fraseInput = document.querySelector('#frase');
let btnFrase = document.querySelector('#btnFrase');
let respuestaP = document.querySelector('#respuesta');

btnFrase.onclick = function() {
    let frase = fraseInput.value;
    if (frase === "¿Cómo estás?") {
        respuestaP.textContent = "Bien y vos?";
    } else {
        respuestaP.textContent = "No entiendo la pregunta";
    }
    fraseInput.value = ''; 
};

let nombreInput = document.querySelector('#nombreEstudiante');
let btnEstudiante = document.querySelector('#btnEstudiante');
let listaEstudiantesP = document.querySelector('#listaEstudiantes');
let estudiantes = [];

btnEstudiante.onclick = function() {
    let nombre = nombreInput.value;
    if (nombre !== "" && estudiantes.length < 10) {
        estudiantes[estudiantes.length] = nombre;
        nombreInput.value = ''; 
    } else if (estudiantes.length >= 10) {
        alert("Ya se han registrado 10 estudiantes.");
    } else {
        alert("Por favor ingresa un nombre válido.");
    }
    
    mostrarEstudiantes();
};

function mostrarEstudiantes() {
    let lista = "Estudiantes: ";
    for (let i = 0; i < estudiantes.length; i++) {
        lista += estudiantes[i];
        if (i < estudiantes.length - 1) {
            lista += ', '; 
        }
    }
    listaEstudiantesP.textContent = lista;
}
