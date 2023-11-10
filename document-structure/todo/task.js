let input = document.getElementById("task__input");
let btn = document.getElementById("tasks__add");
let form = document.getElementById("tasks__form");
let tastList = document.getElementById("tasks__list");

function createQuest() {
  let div = document.createElement("div");

  div.setAttribute("class", "task");
  div.innerHTML = `<div class="task__title">
     ${input.value.trim()}
     </div>
     <a href="#" class="task__remove">&times;</a>`;

  tastList.insertAdjacentElement("beforeend", div);
}

function remove() {
  let tasks = document.getElementsByClassName("task");
  let arrTasks = Array.from(tasks);
  let cross = document.getElementsByClassName("task__remove");
  let arrCross = Array.from(cross);

  arrCross.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      arrTasks[index].remove();
    });
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value.trim() != "") {
    createQuest();
    remove();
  }
  input.value = "";
});
