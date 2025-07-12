// Typing Effect
const words = ["Frontend Developer", "Creative Coder", "UI/UX Enthusiast"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typing = document.getElementById("typing");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    typing.textContent = currentWord;

    if (j === words[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i >= words.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 50 : 120);
}
type();

// Scroll Animation
const animatedElements = document.querySelectorAll('.animate');

function reveal() {
  const windowHeight = window.innerHeight;
  animatedElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// ---------------- SPIDER WEB BACKGROUND ----------------
const canvas = document.getElementById("web-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;
const mouse = {
  x: null,
  y: null,
  radius: 120
};

window.addEventListener("mousemove", function(e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

class Particle {
  constructor(x, y, directionX, directionY, size) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "#00ffff";
    ctx.fill();
  }

  update() {
    // Bounce off edges
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

    // Mouse collision effect
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      const moveX = force * Math.cos(angle);
      const moveY = force * Math.sin(angle);
      this.x -= moveX;
      this.y -= moveY;
    }

    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
  }
}

function connect() {
  let opacity;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a + 1; b < particlesArray.length; b++) {
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        opacity = 1 - distance / 120;
        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function init() {
  particlesArray = [];
  const numberOfParticles = (canvas.width * canvas.height) / 9000;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = 2;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const directionX = (Math.random() - 0.5) * 1;
    const directionY = (Math.random() - 0.5) * 1;
    particlesArray.push(new Particle(x, y, directionX, directionY, size));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach(p => p.update());
  connect();
}

init();
animate();
