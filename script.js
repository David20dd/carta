function abrirCarta() {
    let carta = document.getElementById("carta");
    let sobre = document.getElementById("sobre");

    carta.style.display = "block";
    sobre.style.display = "none";

    crearMuchosCorazones();
}

function crearCorazon() {
    let corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 25 + 18 + "px";
    corazon.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(corazon);

    setTimeout(function() {
        corazon.remove();
    }, 7000);
}

function crearMuchosCorazones() {
    setInterval(crearCorazon, 350);
}