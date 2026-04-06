/* hero section script */
const hero = document.querySelector(".hero");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", () => {
  hero.classList.add("hover-left");
  hero.classList.remove("hover-right");
});

right.addEventListener("mouseenter", () => {
  hero.classList.add("hover-right");
  hero.classList.remove("hover-left");
});

// Optional reset
hero.addEventListener("mouseleave", () => {
  hero.classList.remove("hover-left");
  hero.classList.remove("hover-right");
});