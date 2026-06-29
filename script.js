function aceptar() {
    let respuesta = document.getElementById("respuesta");

    respuesta.innerHTML = "Eso quería escuchar 😍🔥<br>Prepárate, porque esta noche la temperatura no baja 😉❤️‍🔥";
}

function moverBoton() {
    let boton = document.getElementById("btnNo");

    let x = Math.floor(Math.random() * 280);
    let y = Math.floor(Math.random() * 55);

    boton.style.left = x + "px";
    boton.style.top = y + "px";
}
