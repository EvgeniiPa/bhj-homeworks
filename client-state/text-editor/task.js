let textArea = document.getElementById("editor");
let card = document.querySelector(".card");
let btn = document.createElement("button");
btn.textContent = "Очистить содержимое";
card.appendChild(btn);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  textArea.value = "";
});

textArea.addEventListener("change", (e) => {
  saveItem();
});

function saveItem() {
  let value = textArea.value;
  localStorage.setItem("text", value);
}

function getItem() {
  document.getElementById("editor").textContent = localStorage.getItem("text");
}

getItem();
