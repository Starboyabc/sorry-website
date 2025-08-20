
// Falling hearts + text rain
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const words = ["Suzzu", "Jaanu", "Pillu", "Bachha", "❤️"];
let particles = [];

class Particle {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.speed = Math.random() * 2 + 1;
    this.size = 20;
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.font = this.size + "px Arial";
    ctx.fillText(this.text, this.x, this.y);
  }
}

function init() {
  for (let i = 0; i < 50; i++) {
    let text = words[Math.floor(Math.random() * words.length)];
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particles.push(new Particle(x, y, text));
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}
init();
animate();

// Slideshow
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let s of slides) s.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}
showSlides();

// Audio control
const audio = new Audio("assets/final_mix.mp3");
document.getElementById("audio-control").addEventListener("click", () => {
  if (audio.paused) audio.play();
  else audio.pause();
});
