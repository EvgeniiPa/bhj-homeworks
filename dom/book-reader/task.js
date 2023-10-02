let fontSize = document.querySelectorAll(".font-size");
let fontSizeActive = document.querySelector(".font-size_active");
let array = Array.from(fontSize);

function clearClass() {
  fontSizeActive.classList.remove("fontSizeActive");
}

function addClass() {
  clearClass();
  this.classList.add("font-size_active");
}

array.forEach((item) => {
  item.addEventListener("click", addClass);
});

//Почему у меня не происходит присваивание события каждому элементу массива array?
