document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".line--middle").classList.toggle("active");

  document.querySelector(".line--top").classList.toggle("active");

  document.querySelector(".line--bottom").classList.toggle("active");

  document.querySelector(".nav-links__mobile").classList.toggle("open");
});
