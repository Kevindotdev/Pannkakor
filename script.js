const burgerMenu = document.querySelector(".burgerMenu");
const navbar = document.querySelector(".navbar__links");
const overlay = document.querySelector(".navbar__overlay");

burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});
