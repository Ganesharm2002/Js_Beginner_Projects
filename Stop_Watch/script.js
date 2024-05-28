const displayWatch = document.querySelector("#timer");
const startStopBtn = document.querySelector("#startStop");
const resetBtn = document.querySelector("#reset-btn");
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

let isRunning = false;
const startStop = () => {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = "Stop";
    isRunning = false;
  } else {
    timer = setInterval(updateTime, 1000);
    startStopBtn.textContent = "Start";
    isRunning = true;
  }
};
let reset = () => {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayWatch.textContent = "00:00:00:00";
};
let updateTime = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const displayString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  displayWatch.textContent = displayString;
};
startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
