const menuToggle = document.querySelector(".menu-toggler input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

var typed = new Typed(".input", {
  strings: ["Lemari", "UX Designer", "Web Developer"],
  typedSpeed: 70,
  backSpeed: 55,
  loop: true,
});
