document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("nav-active");
});
// Select all `a` elements in navbar
let navLinks = document.querySelectorAll("nav a");

// Iterate over each link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    // If the nav is active, close it
    let navElement = document.querySelector("nav");
    if (navElement.classList.contains("nav-active")) {
      navElement.classList.remove("nav-active");
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop - 78.5,
        behavior: "smooth",
      });
    });
  });
});

let backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// Function for smooth scrolling
function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing function
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

// Hide button initially
backToTopButton.style.display = "none";

window.onbeforeunload = function () {
  // The reset() function is used to reset all form fields.
  document.getElementById("myForm").reset();
};

// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
