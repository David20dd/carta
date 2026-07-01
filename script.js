const openBtn = document.getElementById("openBtn");
const heartBtn = document.getElementById("heartBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");
const particles = document.getElementById("particles");

function openMessage() {
  modal.classList.add("show");
  createBurst();
}

function closeMessage() {
  modal.classList.remove("show");
}

openBtn.addEventListener("click", openMessage);
heartBtn.addEventListener("click", openMessage);
closeBtn.addEventListener("click", closeMessage);

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeMessage();
  }
});

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const symbols = ["❤", "✦", "❀", "✧", "♡"];
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = Math.random() * 4 + 5 + "s";
  particle.style.fontSize = Math.random() * 14 + 14 + "px";

  particles.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 9000);
}

function createBurst() {
  for (let i = 0; i < 35; i++) {
    setTimeout(createParticle, i * 35);
  }
}

setInterval(createParticle, 700);

document.addEventListener("mousemove", function(event) {
  if (Math.random() > 0.82) {
    const heart = document.createElement("div");
    heart.classList.add("particle");
    heart.textContent = "♡";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.bottom = "auto";
    heart.style.animationDuration = "2s";
    particles.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
});
