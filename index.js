const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul li");
const fullscreenMenu = document.querySelector(".fullscreen-menu");
const closeMenuIcon = document.querySelector(".menu-close-button")

menuIcon.addEventListener("click", () => {
  navLinks.classList.add("show");

  links.forEach((link) => {
    link.classList.add("fade");
  });

  fullscreenMenu.classList.add("show");
});

closeMenuIcon.addEventListener("click", () => {
  navLinks.classList.remove("show");

  links.forEach((link) => {
    link.classList.remove("fade");
  });

  fullscreenMenu.classList.remove("show");
});