const burgerMenu = document.querySelector(".burgerMenu");
const navbar = document.querySelector(".navbar__links");

burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
