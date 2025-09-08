let timer;
let running = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  display.textContent =
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs;
}

function startStop() {
  if (!running) {
    startTime = Date.now();
    timer = setInterval(updateDisplay, 1000);
    startStopBtn.textContent = "Stop";
    display.classList.remove("stopped");
    display.classList.add("running");
    running = true;
  } else {
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
    startStopBtn.textContent = "Start";
    display.classList.remove("running");
    display.classList.add("stopped");
    running = false;
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  elapsedTime = 0;
  display.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
  display.classList.remove("running", "stopped");
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "s") startStop();
  if (e.key.toLowerCase() === "r") reset();
});
