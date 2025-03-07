window.addEventListener("scroll", function (e) {
  const header = document.querySelector("header");
  const firstDiv = document.querySelector(".first");
  const buttonInFirst = this.document.querySelector("li button");

  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight) {
    firstDiv.style.backgroundColor = "white";
    buttonInFirst.style.backgroundColor = "#1a8917";
  } else {
    firstDiv.style.backgroundColor = "#FFC017";
    buttonInFirst.style.backgroundColor = "black";
  }
});
