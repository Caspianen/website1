// 🎯 Event kontrol untuk HP
canvas.addEventListener("touchstart", e => {
  e.preventDefault();
  attract = true;
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
}, { passive: false });

canvas.addEventListener("touchend", e => {
  e.preventDefault();
  attract = false;
}, { passive: false });

canvas.addEventListener("touchmove", e => {
  e.preventDefault();
  if (attract) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}, { passive: false });
