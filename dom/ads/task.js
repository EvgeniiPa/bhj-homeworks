let rotatorCase = document.querySelectorAll(".rotator__case");
let rotator = document.querySelector(".rotator");
let arr = Array.from(rotatorCase);

let sum = 1;

let id = setInterval(() => {
  if (sum == 0) {
    arr[5].classList.remove("rotator__case_active");
    arr[sum].classList.add("rotator__case_active");
  }

  if (sum > 0) {
    arr[sum - 1].classList.remove("rotator__case_active");
    arr[sum].classList.add("rotator__case_active");
  }

  sum++;
  sum = sum % arr.length;
}, 1000);

// rotator__case_active
