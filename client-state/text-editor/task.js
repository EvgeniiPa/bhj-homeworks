let textArea = document.getElementById("editor");
let card = document.querySelector(".card");
let btn = document.createElement("button");
btn.textContent = "Очистить содержимое";
card.appendChild(btn);

btn.addEventListener("click", (e) => {
  textArea.value = "";
  localStorage.removeItem("text");
});

textArea.addEventListener("input", (e) => {
  localStorage.setItem("text", textArea.value);
});

function getItem() {
  document.getElementById("editor").textContent = localStorage.getItem("text");
}

getItem();
