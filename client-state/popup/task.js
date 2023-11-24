let modal = document.querySelector(".modal");
let cookie = document.cookie;
let btnCLose = document.querySelector(".modal__close");

function cookieCheked() {
  let cookieItems = document.cookie.split("; ");
  cookieItems.find((item) => {
    if (item != "closePopup=close") {
      modal.classList.add("modal_active");
    }
  });
}

btnCLose.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.remove("modal_active");
  cookie = "closePopup=close; expires=Tue, 19 Jan 2038 03:14:07 GMT";
});

cookieCheked();
