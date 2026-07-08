const display = document.getElementById("display");

function playSound(key) {
  const audio = document.getElementById(key);

  if (!audio) return;

  const pad = audio.parentElement;

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id;

  pad.classList.add("active");

  setTimeout(() => {
    pad.classList.remove("active");
  }, 150);
}

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.querySelector("audio").id;
    playSound(key);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  playSound(key);
});