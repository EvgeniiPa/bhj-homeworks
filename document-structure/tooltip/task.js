let tooltips = document.querySelectorAll(".has-tooltip");
let arr = Array.from(tooltips);

arr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    let itemRect = item.getBoundingClientRect();

    let div = document.createElement("div");

    let divRect = div.getBoundingClientRect();

    div.setAttribute("class", "tooltip");
    div.textContent = item.title;

    divRect.width = itemRect.width;
    divRect.height = 30;

    divRect.y = itemRect.y + divRect.height;

    div.classList.add("tooltip_active");

    // console.log(

    //   "divRect.y: " + divRect.y,
    //   "divRect.width: " + divRect.width,
    //   "divRect.height: " + divRect.height
    // );
    // console.log(
    //   "itemRect y: " + itemRect.y,
    //   "itemRect x: " + itemRect.x,
    //   "itemRect.width: " + itemRect.width
    // );
  });
});

// Не могу понять , почему элемент не отображается;
// В CSS не нашел размеры элемента с подсказкой (width и height);
// Добавил необходимый стиль  "tooltip_active" , но элемент не появляется;
