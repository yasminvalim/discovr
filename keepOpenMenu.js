menuIcon.addEventListener("click", () => {
  navLinks.classList.add("show");

  links.forEach((link) => {
    link.classList.add("fade");
  });

  fullscreenMenu.classList.add("show");
});

menuIcon.click();
