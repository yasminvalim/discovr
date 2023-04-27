const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector("nav ul");
const links = document.querySelectorAll("nav ul li");
const fullscreenMenu = document.querySelector(".fullscreen-menu");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  fullscreenMenu.classList.toggle("show");
});