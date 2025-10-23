// Neon flicker effect for title
const title = document.querySelector('h1');

function flickerEffect() {
  title.style.opacity = Math.random() > 0.1 ? 1 : 0.8;
  setTimeout(flickerEffect, 150 + Math.random() * 300);
}

flickerEffect();
console.log("Welcome to Team 404 Not Found 🚀");
