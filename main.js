const video = document.getElementById("video");
const btn = document.querySelector(".btn");
let isActive = true;

btn.addEventListener("click", () => {
  if (isActive) {
    video.pause();
    btn.textContent = "再生";
  } else {
    video.play();
    btn.textContent = "停止";
  }
  isActive = !isActive;
});
