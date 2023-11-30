let modal = document.querySelector(".modal");
let btnCLose = document.querySelector(".modal__close");

let arr = document.cookie.split("; ");
let result = arr.find((item) => item == "popupCLose=close");

if (!result) {
  modal.classList.add("modal_active");
}

btnCLose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "popupCLose=close";
});
