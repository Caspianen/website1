const flames = document.querySelectorAll(".flame");
const confettiContainer = document.getElementById("confetti");

function blowCandles() {
  flames.forEach((f) => (f.style.display = "none"));
  launchConfetti();
  showOpenLetterButton();
}

function launchConfetti() {
  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

function randomColor() {
  const colors = ["#ff4d6d", "#ffb84d", "#4dff88", "#4da6ff", "#ff66ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showOpenLetterButton() {
  const btn = document.createElement("div");
  btn.classList.add("open-letter-btn");
  btn.innerText = "💌 Buka Surat Ulang Tahun 💌";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    btn.remove();
    showLetter();
  });
}

function showLetter() {
  const overlay = document.createElement("div");
  overlay.classList.add("letter-overlay");

  const letter = document.createElement("div");
  letter.classList.add("letter-box");
  letter.innerHTML = `
    <h2>💌 Untuk Cintaku 💌</h2>
    <p>Sayangku, selamat ulang tahun 🎂</p>
    <p>Hari ini bukan hanya tentang bertambahnya usia, tapi juga tentang betapa beruntungnya aku memiliki kamu di hidupku.</p>
    <p>Kamu adalah alasan aku tersenyum setiap hari, pelangi setelah hujan, dan cahaya di setiap gelapku. 🌈✨</p>
    <p>Semoga semua doa dan harapanmu terkabul, dan semoga aku selalu jadi bagian dari kebahagiaanmu. 💖</p>
    <p>Terima kasih sudah lahir, terima kasih sudah mencintaiku.</p>
    <p>I love you more than words can ever say. ❤️</p>
    <button id="closeLetter">Tutup</button>
  `;

  overlay.appendChild(letter);
  document.body.appendChild(overlay);

  document.getElementById("closeLetter").addEventListener("click", () => {
    overlay.remove();
  });
}

// klik lilin = padam
flames.forEach((f) => f.addEventListener("click", blowCandles));

// tekan spasi = padam
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    blowCandles();
  }
});
