let tooltips = document.querySelectorAll(".has-tooltip");
let arr = Array.from(tooltips);

arr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    item.style.position = "relativ";

    let itemRect = item.getBoundingClientRect();

    let div = document.createElement("div");

    let divRect = div.getBoundingClientRect();

    div.setAttribute("class", "tooltip");
    div.textContent = item.title;

    divRect.left = itemRect.left;

    divRect.y = itemRect.y + divRect.height;

    div.style.position = "absolute";

    item.appendChild(div);

    div.classList.toggle("tooltip_active");
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

// Не получается задать отступ слева.
