const searchForm =document.querySelector(".search-form");
document.querySelector(".search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  menu.classList.remove("active");
}
const menu =document.querySelector(".header-nav");
document.querySelector(".menu-btn").onclick = () => {
  menu.classList.toggle("active");
  searchForm.classList.remove("active");
}

window.onscroll = () => {
  searchForm.classList.remove("active");
  menu.classList.remove("active");
}

const slides = document.querySelectorAll(".home-slide");
let index = 0;
function next () {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev () {
  slides[index].classList.remove("active"); 
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}