let progress = document.getElementById("progress");
let btn = document.querySelector("#send");

let xhr = new XMLHttpRequest();
let url = "https://students.netoservices.ru/nestjs-backend/upload";
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  xhr.addEventListener("readystatechange", (e) => {
    progress.value = 0.0;
  });

  let formData = new FormData(form);

  xhr.open("POST", url);

  xhr.upload.onprogress = function () {
    progress.value = 0.5;
  };

  xhr.upload.onload = function () {
    progress.value = 1;
  };

  xhr.upload.onerror = function () {
    alert("ошибка");
  };

  xhr.send(formData);
});
