let btnMinus = document.querySelectorAll(".product__quantity-control_dec");
let btnPlus = document.querySelectorAll(".product__quantity-control_inc");
let count = document.querySelectorAll(".product__quantity-value");
let btnAdd = document.querySelectorAll(".product__add");
let imgs = document.querySelectorAll(".product__image");
let products = document.querySelector(".cart__products");
let card = products.outerHTML;

btnMinus.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let sum = Number(count[index].textContent);
    if (sum == 1) {
      sum = 1;
    } else {
      sum--;
    }
    count[index].textContent = sum;
  });
});

btnPlus.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let sum = Number(count[index].textContent);
    sum++;
    count[index].textContent = sum;
  });
});

btnAdd.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (!products.firstElementChild) {
      console.log("Работает");
    } else {
      console.log("Не работает");
    }
  });
});

// Как создать тэг img  при помощи createElement

// function createCard() {
//   let img = document.createElement("img");
//   console.log(img);
// }
