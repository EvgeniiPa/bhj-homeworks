let tabList = document.querySelectorAll(".tab");
let tabContentList = document.querySelectorAll(".tab__content");

function clearTab() {
  let clearTabClaas = document.querySelector(".tab_active");
  clearTabClaas.classList.remove("tab_active");
}

function clearContentList() {
  let clearContentClass = document.querySelector(".tab__content_active");
  clearContentClass.classList.remove("tab__content_active");
}

function add() {
  clearTab();
  this.classList.add("tab_active");
}

let arrBtn = Array.from(tabList);

let arrContent = Array.from(tabContentList);

arrBtn.forEach((item, index) => {
  item.addEventListener("click", add);
  item.addEventListener("click", () => {
    clearContentList();
    arrContent[index].classList.add("tab__content_active");
  });
});
