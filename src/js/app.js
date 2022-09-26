/* eslint-disable no-console */
const btnCollapse = document.querySelector(".btn");
const divText = document.querySelector(".text");
btnCollapse.addEventListener("mouseenter", () => {
  divText.classList.add("move");
});
btnCollapse.addEventListener("mouseleave", () => {
  divText.classList.remove("move");
});
