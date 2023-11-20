let xhr = new XMLHttpRequest();

let items = document.querySelector("#items");
let img = document.querySelector("#loader");

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState == xhr.DONE) {
    let responseParse = JSON.parse(xhr.responseText);
    let responseObj = responseParse.response.Valute;

    for (let currencyCode in responseObj) {
      if (responseObj.hasOwnProperty(currencyCode)) {
        let currencyItem = responseObj[currencyCode];

        let divCode = document.createElement("div");
        divCode.setAttribute("class", "item__code");
        divCode.innerHTML = currencyItem.CharCode;

        let divValue = document.createElement("div");
        divValue.setAttribute("class", "item__value");
        divValue.innerHTML = currencyItem.Value;

        let divCurrency = document.createElement("div");
        divCurrency.setAttribute("class", "item__currency");
        divCurrency.innerHTML = "руб.";

        let container = document.createElement("div");
        container.setAttribute("class", "item");

        container.appendChild(divCode);
        container.appendChild(divValue);
        container.appendChild(divCurrency);

        items.appendChild(container);
      }

      img.classList.toggle("loader_active");
    }
  }
});
