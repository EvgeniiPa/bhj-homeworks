let hole = document.getElementByClassName("hole");

let lostPoints = document.getElementById("lost");
let winPoints = document.getElementById("dead");

function result() {
  if (winPoints == 10) {
    alert(`Вы победили, количество попаданий ${winPoints}`);
    winPoints = 0;
  }

  if (lostPoints == 5) {
    alert(`Вы проиграли, количество промахов ${lostPoints}`);
    lostPoints = 0;
  }

  if (hole.className.includes("hole_has-mole")) {
    winPoints = +winPoints + 1;
  } else {
    lostPoints = +lostPoints + 1;
  }
}

console.log(hole);
