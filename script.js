const abrirMensaje = document.getElementById("abrirMensaje");
const corazonPequeno = document.getElementById("corazonPequeno");
const cerrar = document.getElementById("cerrar");
const modal = document.getElementById("modal");
const particulas = document.getElementById("particulas");
const tarjeta = document.querySelector(".tarjeta");

function abrirModal() {
  modal.classList.add("activo");
  explosionDeAmor();
}

function cerrarModal() {
  modal.classList.remove("activo");
}

abrirMensaje.addEventListener("click", abrirModal);
corazonPequeno.addEventListener("click", abrirModal);
cerrar.addEventListener("click", cerrarModal);

modal.addEventListener("click", function(evento) {
  if (evento.target === modal) {
    cerrarModal();
  }
});

function crearParticula() {
  const particula = document.createElement("div");
  particula.classList.add("particula");

  const simbolos = ["❤", "♡", "✦", "✧", "❀", "🌸"];
  particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

  particula.style.left = Math.random() * 100 + "vw";
  particula.style.fontSize = Math.random() * 16 + 15 + "px";
  particula.style.animationDuration = Math.random() * 4 + 5 + "s";

  particulas.appendChild(particula);

  setTimeout(function() {
    particula.remove();
  }, 9000);
}

function explosionDeAmor() {
  for (let i = 0; i < 45; i++) {
    setTimeout(crearParticula, i * 28);
  }
}

setInterval(crearParticula, 650);

document.addEventListener("mousemove", function(evento) {
  if (Math.random() > 0.84) {
    const brillo = document.createElement("div");
    brillo.classList.add("particula");
    brillo.textContent = "♡";
    brillo.style.left = evento.clientX + "px";
    brillo.style.top = evento.clientY + "px";
    brillo.style.bottom = "auto";
    brillo.style.fontSize = "18px";
    brillo.style.animationDuration = "2s";

    particulas.appendChild(brillo);

    setTimeout(function() {
      brillo.remove();
    }, 2000);
  }
});

tarjeta.addEventListener("mousemove", function(evento) {
  const rect = tarjeta.getBoundingClientRect();
  const x = evento.clientX - rect.left;
  const y = evento.clientY - rect.top;

  const centroX = rect.width / 2;
  const centroY = rect.height / 2;

  const rotarX = (y - centroY) / 45;
  const rotarY = (centroX - x) / 45;

  tarjeta.style.transform = `perspective(1000px) rotateX(${rotarX}deg) rotateY(${rotarY}deg)`;
});

tarjeta.addEventListener("mouseleave", function() {
  tarjeta.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
});
