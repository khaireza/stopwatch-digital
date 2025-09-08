let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    startStopBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  startStopBtn.textContent = "Start";
  isRunning = false;
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);

updateDisplay();
