let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
let timer = document.getElementById("click__speed");

function bigSize() {
  cookie.width = 250;
  clickerCounter.textContent = +clickerCounter.textContent + 1;
}

function smallSize() {
  cookie.width = 200;
  clickerCounter.textContent = +clickerCounter.textContent + 1;
}

cookie.onclick = result;

function result() {
  if (cookie.width == 200) {
    bigSize();
  } else if (cookie.width == 250) {
    smallSize();
  }
}

console.log(clickerCounter);
