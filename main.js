import {} from "./js/index.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const toggle = $(".nav_btn");
const nav = $(".nav");
const gnb = $(".gnb");
const stripes = $(".stripes");
const links = $$(".nav a");

toggle.addEventListener("click", () => {
  nav.classList.toggle("visible");
  toggle.classList.toggle("visible");
  stripes.classList.toggle("visible");
  gnb.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav a")) {
    nav.classList.remove("visible");
    toggle.classList.remove("visible");
    stripes.classList.remove("visible");
    gnb.classList.remove("hidden");
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > 800) {
    gnb.classList.add("dark");
    toggle.classList.add("dark");
  } else {
    gnb.classList.remove("dark");
    toggle.classList.remove("dark");
  }
});

const split = new SplitText(".main_visual01 h2", { type: "chars" });
gsap.from(split.chars, {
  opacity: 0,
  y: 30,
  stagger: 0.1,
  delay: 0.3,
  ease: "back(2)",
  immediateRender: false,
});

gsap.registerPlugin(ScrollTrigger);

const visualWrapper = $(".main_visual_wrapper");
const visualCount = $$(".main_visual").length;
const wrapperWidth = visualCount * window.innerWidth;

visualWrapper.style.width = wrapperWidth + "px";

gsap.to(visualWrapper, {
  x: () => -wrapperWidth + window.innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".section01",
    start: "top top",
    end: () => "+=" + (wrapperWidth - window.innerWidth),
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
});
