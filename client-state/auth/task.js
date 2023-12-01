const form = document.querySelector("#signin__form");
const formWrapper = document.querySelector(".signin");
const btn = document.querySelector("#signin__btn");
const welcomePage = document.querySelector(".welcome");
const userId = document.querySelector("#user_id");

if (localStorage.getItem("user_id")) {
  formWrapper.classList.remove("signin_active");
  welcomePage.classList.add("welcome_active");
  userId.innerHTML = localStorage.user_id;
}

btn.addEventListener("click", (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";

  xhr.onload = () => {
    const responseSuccess = xhr.response.success;

    if (responseSuccess) {
      const userId = xhr.response.user_id;

      formWrapper.classList.remove("signin_active");
      welcomePage.classList.add("welcome_active");
      userId.innerHTML = userId;
      localStorage.setItem("user_id", userId);
    } else {
      alert("«Неверный логин/пароль»");
    }
  };

  form.reset();

  xhr.send(formData);
});
