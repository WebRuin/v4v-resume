width = window.innerWidth;
const nav = document.querySelector("nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  nav.classList.remove("closed");
  nav.classList.add("opened");
  close.classList.remove("hidden");
  open.classList.add("hidden");
});

close.addEventListener("click", () => {
  nav.classList.remove("opened");
  nav.classList.add("closed");
  close.classList.add("hidden");
  open.classList.remove("hidden");
});
if (width < 1000) {
  nav.classList.remove("fullNav");
  nav.classList.add("mobileNav");
}
