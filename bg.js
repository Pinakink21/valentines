/* =============================
   BACKGROUND HEARTS
============================= */
function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["💗", "💖", "💕", "💘"][Math.floor(Math.random() * 4)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 40 + Math.random() * 30 + "px";
  heart.style.setProperty("--drift", `${(Math.random() - 0.5) * 200}px`);
  heart.style.animationDuration = 8 + Math.random() * 6 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 15000);
}

setInterval(spawnHeart, 300);

/* =============================
   BACKGROUND MUSIC
============================= */
/* =============================
   GLOBAL BACKGROUND MUSIC
============================= */

(function () {
  const MUSIC_KEY = "musicAllowed";

  function playIfAllowed(trigger) {
    const music = document.getElementById("bgMusic");
    if (!music) return;

    // Already playing → do nothing
    if (!music.paused) return;

    music.play().catch(() => {});
  }

  // 🔑 First user interaction → unlock audio
  document.addEventListener(
    "click",
    () => {
      if (sessionStorage.getItem(MUSIC_KEY) === "true") return;

      sessionStorage.setItem(MUSIC_KEY, "true");
      playIfAllowed("user");
    },
    { once: true }
  );

  // 🔄 Page load → resume if already unlocked
  window.addEventListener("load", () => {
    if (sessionStorage.getItem(MUSIC_KEY) === "true") {
      playIfAllowed("resume");
    }
  });
})();



