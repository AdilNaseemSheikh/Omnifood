const hero = document.querySelector(".section-hero");
const navbar = document.querySelector(".navbar");

const navHeight = navbar.getBoundingClientRect().height;

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const callback = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
};

const heroObserver = new IntersectionObserver(callback, options);

heroObserver.observe(hero);
