import {
  isFocusMarker,
  isDefaultMarker,
  setMapCenter,
} from "../components/map.js";

// 마우스를 리스트 위에 올리는 경우
export function uhaHandleMouseEnter(e) {
  const button = e.currentTarget;
  isFocusMarker(button.id);
  const uhaHidden = button.querySelector(".uhaHidden");
  uhaHidden.hidden = false;
  button.style.color = "white";
  gsap.to(button, {
    duration: 1,
    height: 120,
    ease: "power2.out",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),

  url("${button.dataset.img}")`,
  });
}

// 마우스를 리스트에서 치우는 경우
export function uhaHandleMouseLeave(e) {
  const button = e.currentTarget;
  isDefaultMarker(button.id);
  const uhaHidden = button.querySelector(".uhaHidden");
  uhaHidden.hidden = true;
  button.style.color = "black";
  gsap.to(button, {
    duration: 1,
    height: "auto",
    ease: "power2.out",
    backgroundImage: "none",
  });
}
