let item = document.getElementById("status");
let timer = document.getElementById("timer");
let countdown = function () {
  if (timer.textContent == 0) {
    clearInterval(intervalId);
  }

  timer.textContent -= 1;
};

item.onclick = function () {
  let intervalId = setInterval(countdown, 1000);
};
