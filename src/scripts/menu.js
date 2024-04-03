// hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".line--middle").classList.toggle("active");

  document.querySelector(".line--top").classList.toggle("active");

  document.querySelector(".line--bottom").classList.toggle("active");

  document.querySelector(".nav-links__mobile").classList.toggle("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".nav-links__mobile").classList.remove("active");
    document
      .querySelector(".line--middle, .line--top, .nav-links__mobile")
      .classList.remove("active");
  }
});
