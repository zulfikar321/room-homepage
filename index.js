let imageSlides = document.querySelectorAll(".images");
console.log(imageSlides);
let section = document.querySelectorAll("section");
console.log(section);

let index = 0;

function displaySection() {
  for (let i = 0; i < section.length; i++) {
    section[i].style.display = "none";
  }
  for (let i = 0; i < section.length; i++) {
    imageSlides[i].style.display = "none";
  }
  section[index].style.display = "block";
  imageSlides[index].style.display = "block";
}

function slidesIndex(value) {
  index += value;
  if (index > 2) {
    index = 0;
  } else if (index < 0) {
    index = 2;
  }
  displaySection();
}

function show() {
  const navLink = document.querySelector(".nav-links");
  navLink.classList.toggle("show");
}
