let timer;
let isRunning = false;
let seconds = 0;

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  let secs = String(seconds % 60).padStart(2, "0");
  display.textContent = `${hrs}:${mins}:${secs}`;
}

startStopBtn.addEventListener("click", function () {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    isRunning = true;
    startStopBtn.textContent = "Stop";
    display.classList.remove("stopped");
    display.classList.add("running");
  } else {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = "Start";
    display.classList.remove("running");
    display.classList.add("stopped");
  }
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateDisplay();
  startStopBtn.textContent = "Start";
  display.classList.remove("running");
  display.classList.add("stopped");
});

// Inisialisasi tampilan awal
updateDisplay();
