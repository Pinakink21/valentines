/* -----------------------------
   CONFIG
------------------------------ */
const noTexts = [
  "No 🙄",
  "Are you sure? 🥺",
  "Really sure? 😢",
  "Think again 💔",
  "Come on 😭",
  "Last chance 😏",
  "You KNOW you want to 💕"
];
 
/* -----------------------------
   STATE
------------------------------ */
let clickCount = 0;
let noX = 0;
let noY = 0;
 
/* -----------------------------
   ELEMENTS
------------------------------ */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const messageEl = document.getElementById("message");
 
/* -----------------------------
   HELPERS
------------------------------ */
function updateNoTransform() {
  const scale = Math.max(1 - clickCount * 0.18, 0.25);
  noBtn.style.transform = `translate(${noX}px, ${noY}px) scale(${scale})`;
}
 
function dodgeNo() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 30 + Math.random() * 25; // smooth dodge
 
  noX += Math.cos(angle) * distance;
  noY += Math.sin(angle) * distance;
 
  updateNoTransform();
}
 
/* -----------------------------
   NO BUTTON LOGIC
------------------------------ */
noBtn.addEventListener("mouseenter", dodgeNo);
noBtn.addEventListener("touchstart", dodgeNo);
 
noBtn.addEventListener("click", () => {
  clickCount++;
 
  // Change NO button text
  noBtn.textContent =
    noTexts[Math.min(clickCount, noTexts.length - 1)];
 
  // Optional supporting message (keeps your existing UI)
  messageEl.textContent = "Just click YES already 😌";
 
  // Grow YES button
  const yesScale = Math.min(1 + clickCount * 0.35, 3.8);
  yesBtn.style.transform = `scale(${yesScale})`;
 
  updateNoTransform();
});
 
/* -----------------------------
   YES BUTTON LOGIC
------------------------------ */
function handleYes() {

  confettiBoom();
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 900);
}
 
/* -----------------------------
   CONFETTI
------------------------------ */
function confettiBoom() {
  for (let i = 0; i < 140; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
 
    c.style.left = Math.random() * 100 + "vw";
    c.style.background =
      ["#ff5fa2", "#ffc2d1", "#ff8fab", "#ffd6e8"][
        Math.floor(Math.random() * 4)
      ];
 
    c.style.setProperty("--x-drift", `${(Math.random() - 0.5) * 600}px`);
    c.style.setProperty("--rotation", `${Math.random() * 1080}deg`);
    c.style.animationDuration = 1.8 + Math.random() * 1.5 + "s";
 
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}
 
