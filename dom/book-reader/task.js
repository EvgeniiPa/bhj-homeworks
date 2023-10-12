let fontSize = document.querySelectorAll(".font-size");

let array = Array.from(fontSize);

array.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    let fontSizeActive = document.querySelector(".font-size_active");

    let bookContent = document.querySelector(".book__content");

    fontSizeActive.classList.remove("font-size_active");
    item.classList.add("font-size_active");

    if (item.classList.contains("font-size_small")) {
      bookContent.classList.remove("book_fs-big");
      bookContent.classList.add("book_fs-small");
    } else if (item.classList.contains("font-size_big")) {
      bookContent.classList.remove("book_fs-small");
      bookContent.classList.add("book_fs-big");
    } else {
      bookContent.classList.remove("book_fs-small");
      bookContent.classList.remove("book_fs-big");
    }
  });
});
