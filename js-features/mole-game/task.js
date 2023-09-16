let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

let countDead = 0;
let countLost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent = +dead.textContent + 1;
      if (dead.textContent == 10) {
        alert("Победа");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    } else {
      lost.textContent = +lost.textContent + 1;
      if (lost.textContent == 5) {
        alert("Поражение");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
  };
}
