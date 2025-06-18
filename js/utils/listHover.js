
// 마우스를 리스트 위에 올리는 경우
export function uhaHandleMouseEnter(e) {
  const button = e.currentTarget; 
  const uhaHidden = button.querySelector('.uhaHidden');
  uhaHidden.hidden = false;
    gsap.to(button, {
        duration: 1,
        height: 120,
        ease: "power2.out",
        backgroundImage: `url("${button.dataset.img}")`,
    });
}

// 마우스를 리스트에서 치우는 경우
export function uhaHandleMouseLeave(e) {
  const button = e.currentTarget; 
  const uhaHidden = button.querySelector('.uhaHidden');
  uhaHidden.hidden = true;
    gsap.to(button, {
        duration: 1, 
        height: 'auto', 
        ease: "power2.out",
        backgroundImage: 'none',
    });
}

