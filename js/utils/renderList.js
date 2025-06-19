// 축제 리스트 구성
function uhaMakeList(value){
  let themes = []
  value.theme.forEach((the) => {
    themes.push(` #${the}`);
  })

  return `
  <li class="uhaLi">
    <button type="button" data-img="${value.info.image}" id="${value.id}">
    <div class="uhaUnhidden">
      <p class="uhaName">${value.name}</p>
      <p class="uhaTheme">${themes}</p>
    </div>
    <div class= "uhaHidden" hidden>
      <p class="uhaDate">${value.date}</p>
    </div>
    </button>
  </li>
`

}

// 리스트 렌더
export function uhaRenderList(list,node) {
  list.forEach(festival => {
    node.insertAdjacentHTML('beforeend',uhaMakeList(festival));
});
}
