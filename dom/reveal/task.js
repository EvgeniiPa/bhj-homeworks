let reveal = document.querySelector(".reveal");

setInterval(() => {
  let isVisible = reveal.getBoundingClientRect();

  if (isVisible.top < 556 && isVisible.top > 0) {
    reveal.classList.add("reveal_active");
  } else {
    reveal.classList.remove("reveal_active");
  }

  //   console.log(`Top: ${isVisible.top} \nBottom: ${isVisible.bottom}`);
}, 1000);
