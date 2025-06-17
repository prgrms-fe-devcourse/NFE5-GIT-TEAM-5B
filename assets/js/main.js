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

const visualWrapper = document.querySelector(".main_visual_wrapper");
const visualCount = document.querySelectorAll(".main_visual").length;
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
