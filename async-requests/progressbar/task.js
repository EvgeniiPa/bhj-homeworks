let progress = document.getElementById("progress");
progress.value = 0.0;
sum = 0;
let btn = document.querySelector("#send");

let xhr = new XMLHttpRequest();
let url = "https://students.netoservices.ru/nestjs-backend/upload";
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(form);

  xhr.open("POST", url);

  xhr.upload.addEventListener("progress", (e) => {
    if (e.loaded < e.total) {
      let valueProgress = e.loaded / e.total;
      progress.value = valueProgress;
    } else if (e.loaded == e.total) {
      progress.value = 1;
    }
  });

  xhr.upload.onerror = (e) => {
    console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
  };

  xhr.open("POST", url);
  xhr.send(formData);
});
