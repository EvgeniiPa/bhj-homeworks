let form = document.querySelector("#signin__form");
let formWrapper = document.querySelector(".signin");
let btn = document.querySelector("#signin__btn");
let welcomePage = document.querySelector(".welcome");
let userId = document.querySelector("#user_id");

if (localStorage.hasOwnProperty("user_id")) {
  formWrapper.classList.remove("signin_active");
  welcomePage.classList.add("welcome_active");
  userId.innerHTML = localStorage.user_id;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  let url = "https://students.netoservices.ru/nestjs-backend/auth";

  let formData = new FormData(form);

  xhr.open("POST", url);

  xhr.responseType = "json";

  xhr.onload = function (e) {
    let answer = xhr.response.success;

    if (answer) {
      formWrapper.classList.remove("signin_active");
      welcomePage.classList.add("welcome_active");
      userId.innerHTML = xhr.response.user_id;
      localStorage.setItem("user_id", xhr.response.user_id);
    } else {
      alert("«Неверный логин/пароль»");
    }
  };

  form.reset();

  xhr.send(formData);
});
