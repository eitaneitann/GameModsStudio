// Agrega el efecto glow a los botones y textos
document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".botones a");
    const textos = document.querySelectorAll(".contenido h1, .contenido p");

    botones.forEach(boton => {
        boton.classList.add("glow");
    });

    textos.forEach(texto => {
        texto.classList.add("glow");
    });
});