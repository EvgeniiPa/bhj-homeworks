let xhr = new XMLHttpRequest();
let url = "https://students.netoservices.ru/nestjs-backend/poll";

xhr.open("GET", url);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState == xhr.DONE) {
    let parseResponse = JSON.parse(xhr.responseText);
    let pullTittle = document.querySelector(".poll__title");
    let pollAnswers = document.querySelector(".poll__answers");
    let sum = parseResponse.data.answers.length;

    pullTittle.innerText = parseResponse.data.title;

    for (let i = 0; i < sum; i++) {
      let button = document.createElement("button");
      button.className = "poll__answer";
      button.innerText = parseResponse.data.answers[i];
      pollAnswers.appendChild(button);

      button.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
        window.location.reload();
      });
    }
  }
});
