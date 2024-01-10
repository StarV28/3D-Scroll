let saundButton = document.querySelector(".sound-button");
let audio = document.querySelector("audio");

saundButton.addEventListener("click", (e) => {
  saundButton.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  saundButton.classList.contains("paused") ? audio.pause() : audio.play();
};
window.onblur = function () {
  audio.pause();
};
