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

//Таймер

let timerSecond = document.querySelector(".timer");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function fn() {
  setInterval(() => {
    seconds.textContent--;

    if (
      seconds.textContent < 0 &&
      minutes.textContent >= 0 &&
      hours.textContent >= 0
    ) {
      seconds.textContent = 60;
      minutes.textContent--;

      if (minutes.textContent < 0 && hours.textContent >= 0) {
        minutes.textContent = 60;
        hours.textContent--;

        if (hours.textContent < 0) {
          hours.textContent = 0;
          minutes.textContent = 0;
          seconds.textContent = 0;
        }
      }
    }
  }, 100);
}

timerSecond.addEventListener("click", fn);

// Я разобрался как работает метод .padStart(), теперь сложно в том, как его преминить.
