let item = document.getElementById("status");
let timer = document.getElementById("timer");
let intervalId = null;
let countdown = function () {
  if (timer.textContent == 0) {
    clearInterval(intervalId);
    alert("«Вы победили в конкурсе»");
  }

  if (timer.textContent > 0) {
    timer.textContent -= 1;
  }
};

item.onclick = function () {
  intervalId = setInterval(countdown, 100);
};
