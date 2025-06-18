// 축제 리스트 구성
export function uhaMakeList(value){
return `
  <li class="uhaLi">
    <button type="button" data-img="${value.info.image}" id="${value.id}">
    <div class="uhaUnhidden">
      <p class="uhaName">${value.name}</p>
      <p class="uhaTheme">#${value.theme}</p>
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
