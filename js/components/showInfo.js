// festivalInfoModule.js
import { getFestival } from "../utils/getFestival.js";

// 축제 info 생성
export function createFestivalInfo(targetId, parentNode, imageParentNode) {
  if (parentNode.querySelector(".festival-info")) {
    console.warn("이미 열린 축제 정보가 있습니다.");
    return; // 중복 생성 방지
  }

  const [festival] = getFestival("id", targetId); // 축제 데이터 가져오기
  if (!festival) {
    console.warn(`ID가 ${targetId}인 축제가 없습니다.`);
    return;
  }

  const {
    name,
    info: { image, description },
    city,
    theme,
  } = festival;

  // 인포 노드 생성 및 삽입
  const infoNode = createFestivalTemplate(name, city, theme, description);
  parentNode.appendChild(infoNode);

  // 이미지 노드 생성 및 삽입 (선언 위치는 이벤트 리스너와 공유할 수 있도록 바깥에 둠)
  let imageNode = null;
  if (image && imageParentNode) {
    imageNode = createImageTemplate(image);
    imageParentNode.appendChild(imageNode);
  }

  // ✅ 뒤로가기 버튼 클릭 시 정보 + 이미지 제거
  const closeBtn = infoNode.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    infoNode.remove();
    if (imageNode && imageParentNode.contains(imageNode)) {
      imageNode.remove();
    }
  });
}

// 인포 템플릿 생성
function createFestivalTemplate(name, city, theme, description) {
  const wrapper = document.createElement("div");
  wrapper.className = "festival-info is-active";

  const themeList = theme.map((item) => `<li>${item}</li>`).join("");

  wrapper.innerHTML = `
    <header>
      <h3>${name}</h3>
      <button class="close-btn">
        <img src="../../../assets/images/Arrow back ios.svg" alt="뒤로가기" />
      </button>
    </header>
    <p><strong>도시:</strong> ${city}</p>
    <div>
      <strong>테마:</strong>
      <ul>${themeList}</ul>
    </div>
    <p><strong>설명:</strong> ${description}</p>
  `;

  return wrapper;
}

// 이미지 템플릿 생성
function createImageTemplate(imageUrl, altText = "부가 이미지") {
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "festival-image-overlay";

  imgWrapper.innerHTML = `
    <img src="${imageUrl}" alt="${altText}" />
  `;

  return imgWrapper;
}
