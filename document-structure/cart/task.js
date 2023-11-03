let btnMinus = document.querySelectorAll(".product__quantity-control_dec");
let btnPlus = document.querySelectorAll(".product__quantity-control_inc");
let count = document.querySelectorAll(".product__quantity-value");
let btnAdd = document.querySelectorAll(".product__add");
let imgs = document.querySelectorAll(".product__image");

let product = document.querySelectorAll(".product");
let cartProducts = document.querySelector(".cart__products");
let arrayCarts = document.getElementsByClassName("cart__product");

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
    if (true) {
      console.log("Работает");
      addCart(index);
    } else {
      console.log("Не работает");
    }
  });
});

function addCart(index) {
  let img = document.querySelectorAll(".product__image");
  let code = product[index].dataset.id;
  let cartProduct = `<div class="cart__product" data-id=${code}>
  <img class="cart__product-image" src="${img[index].src}">
  <div class="cart__product-count">${count[index].textContent}</div>
    </div>`;

  cartProducts.innerHTML = cartProducts.innerHTML + cartProduct;
  console.log(cartProducts);
}
