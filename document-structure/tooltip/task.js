let body = document.querySelector("body");

let tooltips = document.querySelectorAll(".has-tooltip");
let arr = Array.from(tooltips);
let div = document.createElement("div");
div.setAttribute("class", "tooltip");
div.setAttribute("style", "left: 0; top: 0");

body.insertAdjacentElement("afterbegin", div);

arr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    let itemRect = item.getBoundingClientRect();

    if (div.textContent != item.title) {
      div.textContent = item.title;
      div.style.left = itemRect.left + "px";
      div.style.top = itemRect.bottom - itemRect.top + itemRect.top + "px";
      div.classList.add("tooltip_active");
    } else {
      div.textContent = item.title;
      div.style.left = itemRect.left + "px";
      div.style.top = itemRect.bottom - itemRect.top + itemRect.top + "px";
      div.classList.toggle("tooltip_active");
    }

    console.log(div);
  });
});
