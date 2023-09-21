let box = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let items = document.querySelectorAll(".dropdown__item");
let arr = Array.from(items);

function openMenu() {
  list.classList.add("dropdown__list_active");
}

function closeMenu() {
  list.classList.remove("dropdown__list_active");
}

arr.forEach((item, index) => {
  item.onclick = () => {
    closeMenu();
    box.textContent = arr[index].textContent;
    return false;
  };
});

box.addEventListener("click", openMenu);
