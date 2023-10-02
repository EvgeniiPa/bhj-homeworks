let rotatorCase = document.querySelectorAll(".rotator__case");
let index = 0;

let id = setInterval(() => {
  let rotatorCaseActive = document.querySelector(".rotator__case_active");
  rotatorCaseActive.classList.remove("rotator__case_active");
  rotatorCaseActive.nextElementSibling.classList.add("rotator__case_active");
  index++;
  if (index == 5) {
    clearInterval(id);
    index = 0;
  }
}, 1000);

// rotator__case_active
