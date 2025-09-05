// kontrol mouse
canvas.addEventListener("mousedown", e => {
  attract = true;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
canvas.addEventListener("mouseup", () => {
  attract = false;
});
canvas.addEventListener("mousemove", e => {
  if (attract) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }
});

// kontrol touch (HP)
canvas.addEventListener("touchstart", e => {
  attract = true;
  mouse.x = e.touches[0].clientX;
  mouse.y = e.touches[0].clientY;
});
canvas.addEventListener("touchend", () => {
  attract = false;
});
canvas.addEventListener("touchmove", e => {
  if (attract) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
});
