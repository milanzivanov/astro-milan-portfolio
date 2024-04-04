/////////////////////
// mobile menu
document.querySelector(".hamburger").addEventListener("click", () => {
  // hamburger menu
  // document.querySelector(".line--middle").classList.toggle("active");
  // document.querySelector(".line--top").classList.toggle("active");
  // document.querySelector(".line--bottom").classList.toggle("active");

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
