let reveal = document.querySelector(".reveal");

window.addEventListener("scroll", () => {
  let isVisible = reveal.getBoundingClientRect();

  let { bottom, top } = isVisible;

  if (top > 0 && bottom < window.innerHeight) {
    reveal.classList.add("reveal_active");
  } else {
    reveal.classList.remove("reveal_active");
  }
});
