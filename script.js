const frases = [
    "Descansa, mi amor. Mañana será un día bonito y yo seguiré pensando en ti.",
    "Que la luna cuide tus sueños y que mi cariño te acompañe toda la noche.",
    "Antes de dormir, solo quiero recordarte que eres muy especial para mí.",
    "Cierra tus ojitos y duerme tranquila, mi amor. Te quiero muchísimo.",
    "Aunque no esté a tu lado, mi corazón siempre te abraza antes de dormir.",
    "Buenas noches, preciosa. Que sueñes bonito y despiertes con una sonrisa."
];

const mensajes = [
    "Que esta noche descanses bonito, que tus sueños sean tranquilos y que recuerdes lo mucho que te quiero.",
    "Hoy quiero que duermas con paz, sabiendo que eres una de las personas más lindas de mi vida.",
    "Mi deseo para esta noche es que todo cansancio se vaya y solo queden sueños hermosos para ti.",
    "Gracias por existir y por hacer mis días más bonitos. Buenas noches, mi amor."
];

function crearEstrellas() {
    const contenedor = document.getElementById("estrellas");

    for (let i = 0; i < 85; i++) {
        let estrella = document.createElement("div");
        estrella.classList.add("estrella");

        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.top = Math.random() * 100 + "vh";
        estrella.style.animationDelay = Math.random() * 3 + "s";

        contenedor.appendChild(estrella);
    }
}

function cambiarMensaje() {
    const frase = document.getElementById("frase");
    const mensaje = document.getElementById("mensaje");

    let posicionFrase = Math.floor(Math.random() * frases.length);
    let posicionMensaje = Math.floor(Math.random() * mensajes.length);

    frase.textContent = frases[posicionFrase];
    mensaje.textContent = mensajes[posicionMensaje];

    crearCorazones();
}

function crearCorazones() {
    for (let i = 0; i < 12; i++) {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.textContent = "❤";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.bottom = "40px";
        corazon.style.fontSize = (18 + Math.random() * 22) + "px";
        corazon.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }
}

crearEstrellas();

setInterval(() => {
    crearCorazones();
}, 3500);
