// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

// DARK / LIGHT MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  const icon = themeToggle.querySelector("i");

  if (document.body.classList.contains("light-mode")) {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
  } else {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
  }

});

// FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");
const watchItems = document.querySelectorAll(".watch-item");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    watchItems.forEach(item => {

      if (filter === "all") {
        item.style.display = "block";
      } else {

        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }

      }

    });

  });

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});