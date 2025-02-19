// search bar
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchToggle"),
  navlink = document.querySelector("#navlink"),
  navopenbtn = document.querySelector(".nav-open-btn"),
  navclosebtn = document.querySelector(".nav-close-btn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  if (nav.classList.contains("openSearch")) {
    searchIcon.textContent = "Close";
    navlink.style.opacity = 0;
  } else {
    searchIcon.textContent = "Search";
    navlink.style.opacity = 1;
  }
});

navopenbtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navclosebtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !navopenbtn.contains(event.target)) {
    nav.classList.remove("openNav");
  }
});
// navbar hilang ketika di scroll

var lastscrolltop = 0;
navbar = document.getElementById('nav')
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
  if (scrollTop > lastscrolltop) {
    navbar.style.top = "-12%"
  } else {
    navbar.style.top = "0"
  }
  lastscrolltop = scrollTop;
})

document.querySelectorAll(".navbar nav ul li a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 20, // Memberikan sedikit ruang di atas
      behavior: "smooth",
    });
  });
});

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
