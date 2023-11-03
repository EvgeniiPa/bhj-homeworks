let input = document.getElementById("task__input");
let btn = document.getElementById("tasks__add");
let form = document.getElementById("tasks__form");
let tastList = document.getElementById("tasks__list");

function createQuest() {
  let element = `<div class="task">
       <div class="task__title">
       ${input.value.trim()}
       </div>
      <a href="#" class="task__remove">&times;</a>
      </div>`;
  tastList.innerHTML = tastList.innerHTML + element;

  let task = document.querySelector(".task");
  let cross = document.querySelector(".task__remove");

  //----Добавляет обработчик только на первый создаваемый элемент

  cross.addEventListener("click", (e) => {
    e.preventDefault();
    task.remove();
  });
}

// function fn() {
//   let cross = document.getElementsByClassName("task__remove");
//   let task = document.getElementsByClassName("task");
//   let arrCross = Array.from(cross);
//   let arrTask = Array.from(task);

//   // ---------Элементы спикска могу удаляться не в том порядке, в котором я нажимаю на крест. Т.е. пытаюсь удалить элемент 7 , удаляется 3й

//   console.log("элемент крест: ", cross);
//   console.log("элемент: ", task);

//   arrCross.forEach((item, index) => {
//     item.addEventListener("click", (e) => {
//       e.preventDefault();
//       task[index].remove();
//     });
//   });
// }

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value.trim() != "") {
    createQuest();
  }
  input.value = "";
});
