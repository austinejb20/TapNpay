const menuBtn = document.querySelector(".menu-btn");
const navContainer = document.querySelector(".nav-container");

menuBtn.addEventListener("click", () => {
  navContainer.classList.toggle("show");
});