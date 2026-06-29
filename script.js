function aceptar() {
    let respuesta = document.getElementById("respuesta");

    respuesta.innerHTML = `
        Me encanta que digas que sí 😍🔥<br>
        Esta noche quiero hacer el amor contigo, sin prisa, con deseo,
        con ternura y con toda la intensidad que me provocas. ❤️‍🔥
    `;

    lanzarCorazones();
}

function respuestaNo() {
    let respuesta = document.getElementById("respuesta");

    respuesta.innerHTML = `
        Está bien, mi amor 😘<br>
        Pero confieso que igual me quedé con ganas de ti... 😏🔥
    `;
}

function mostrarSecreto() {
    let secreto = document.getElementById("secreto");

    if (secreto.style.display === "block") {
        secreto.style.display = "none";
    } else {
        secreto.style.display = "block";
    }
}

function lanzarCorazones() {
    for (let i = 0; i < 18; i++) {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon-flotante");
        corazon.innerHTML = ["❤️", "🔥", "💋", "❤️‍🔥"][Math.floor(Math.random() * 4)];

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDuration = Math.random() * 2 + 3 + "s";

        document.body.appendChild(corazon);

        setTimeout(function() {
            corazon.remove();
        }, 5000);
    }
}

let estilo = document.createElement("style");
estilo.innerHTML = `
    .corazon-flotante {
        position: fixed;
        bottom: -40px;
        font-size: 32px;
        z-index: 10;
        animation: subir linear forwards;
        pointer-events: none;
    }

    @keyframes subir {
        from {
            transform: translateY(0) scale(1);
            opacity: 1;
        }

        to {
            transform: translateY(-110vh) scale(1.6);
            opacity: 0;
        }
    }
`;
document.head.appendChild(estilo);
