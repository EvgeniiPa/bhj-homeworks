let input = document.getElementById("task__input");
let btn = document.getElementById("tasks__add");
let form = document.getElementById("tasks__form");

function createQuest() {
  let tastList = document.getElementById("tasks__list");
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let anchor = document.createElement("a");
  divParent.setAttribute("class", "task");
  divChild.setAttribute("class", "task__title");
  divChild.textContent = input.value.trim();
  anchor.setAttribute("class", "task__remove");
  anchor.setAttribute("href", "#");
  // Не получается вставить unicode так , чтобы отображался крестик. Пробол через бэктики, литеральные скобки.
  anchor.textContent = "&times";

  divParent.appendChild(divChild);
  divParent.appendChild(anchor);
  tastList.appendChild(divParent);

  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    divParent.remove();
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  createQuest();
  input.value = "";
});
