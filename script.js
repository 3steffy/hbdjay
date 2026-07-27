const boton = document.getElementById("btnAbrir");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

boton.addEventListener("click", () => {
    inicio.style.display = "none";
    contenido.classList.remove("oculto");
});
