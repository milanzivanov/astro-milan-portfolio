/////////////////////
// mobile menu
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links__mobile").classList.toggle("open");
});

/////////////////////////////////
// Remove active state from mobile menu with key escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document
      .querySelector(".line--bottom, .line--top, .line--middle")
      .classList.remove("active");
    document.querySelector(".nav-links__mobile").classList.remove("open");
  }
});
