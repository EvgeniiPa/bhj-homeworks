let form = document.querySelector("#signin__form");
let formWrapper = document.querySelector(".signin");
let btn = document.querySelector("#signin__btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  let url = "https://students.netoservices.ru/nestjs-backend/auth";

  let formData = new FormData(form);

  xhr.open("POST", url);

  xhr.upload.onloadend = function (e) {
    let welcomePage = document.querySelector("#welcome");
    let userId = document.querySelector("#user_id");

    // userId.innerHTML =   тут вопрос как получить id пользователя.
    // В объекте "e" я его не нашёл. Метод .response ничего не возвращает

    formWrapper.classList.remove("signin_active");
    welcomePage.classList.add("welcome_active");
  };

  xhr.upload.onerror = () => {
    alert("«Неверный логин/пароль");
  };

  xhr.send(formData);
});
