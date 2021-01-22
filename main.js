const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;
imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add("fadeIn");
  setTimeout(() => {
    current.classList.remove("fadeIn");
  }, 500);
  e.target.style.opacity = opacity;
}
