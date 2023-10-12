let rotatorCase = document.querySelectorAll(".rotator__case");
let rotator = document.querySelector(".rotator");
let arr = Array.from(rotatorCase);
let sum = 0;

let id = setInterval(() => {
  if (sum == 0) {
    arr[5].classList.remove("rotator__case_active");
    arr[sum].classList.add("rotator__case_active");
  }
  arr[sum].classList.remove("rotator__case_active");
  arr[sum + 1].classList.add("rotator__case_active");
  console.log(arr[sum]);
  sum++;

  if (sum == 5) {
    arr[sum].classList.add("rotator__case_active");
    sum = 0;
  }
}, 1000);

// rotator__case_active
