// 축제 데이터.
export const festivals = [
  {
    id: "kr_seoul_fireworks",
    countryCode: "KR",
    city: "Seoul",
    name: "서울 불꽃축제",
    date: "2025-10-05",
    theme: ["불꽃놀이", "야경"],
    location: { lat: 37.5199, lng: 126.9402 },
    info: {
      image: "../assets/images/kr_seoul_fireworks.jpg",
      description:
        "한강에서 열리는 대규모 불꽃놀이 축제입니다. 매년 수십만 명이 모이는 이 축제는 여의도 한강공원에서 펼쳐지며, 국내외 팀이 참여해 화려한 불꽃 쇼를 선보입니다. 가을밤의 선선한 바람과 함께 다채로운 색의 불꽃이 하늘을 수놓아 잊지 못할 밤을 만들어 줍니다.",
    },
  },
  {
    id: "jp_gion_matsuri",
    countryCode: "JP",
    city: "Kyoto",
    name: "기온 마츠리",
    date: "2025-07-17",
    theme: ["전통", "퍼레이드"],
    location: { lat: 35.0037, lng: 135.7788 },
    info: {
      image: "../assets/images/jp_gion_matsuri.jpg",
      description:
        "교토의 대표 축제로, 수백 년 전통의 야마보코 행렬이 펼쳐집니다. 매년 7월 한 달간 열리며, 일본의 전통 의상과 화려한 수레, 악기 연주가 거리를 가득 메웁니다. 특히 17일과 24일에 진행되는 대행렬은 수많은 관광객들의 관심을 끌며, 전통과 현대가 어우러지는 독특한 분위기를 자아냅니다.",
    },
  },
  {
    id: "fr_nice_carnival",
    countryCode: "FR",
    city: "Nice",
    name: "니스 카니발",
    date: "2025-02-15",
    theme: ["카니발", "꽃", "퍼레이드"],
    location: { lat: 43.6959, lng: 7.2656 },
    info: {
      image: "../assets/images/fr_nice_carnival.jpeg",
      description:
        "유럽 3대 카니발 중 하나로, 화려한 꽃차와 퍼레이드가 열립니다. 프랑스 니스의 푸른 해변과 지중해를 배경으로 펼쳐지는 이 축제는 꽃의 향연, 거대한 인형 퍼레이드, 야간 조명 쇼 등 다채로운 프로그램으로 구성되어 있습니다. 매년 2월이면 도시 전체가 활기찬 분위기로 가득 찹니다.",
    },
  },
  {
    id: "br_rio_carnival",
    countryCode: "BR",
    city: "Rio de Janeiro",
    name: "리우 카니발",
    date: "2025-02-28",
    theme: ["댄스", "삼바", "카니발"],
    location: { lat: -22.9068, lng: -43.1729 },
    info: {
      image: "../assets/images/br_rio_carnival.jpg",
      description:
        "세계 최대의 카니발, 리우 삼바 퍼레이드가 열립니다. 브라질 전역에서 모인 삼바 팀들이 화려한 의상과 음악으로 퍼레이드를 펼치며, 참가자와 관람객이 모두 함께 춤추고 즐기는 브라질의 국민 축제입니다. 수백만 명이 방문하는 이 축제는 생생한 열기와 에너지로 가득합니다.",
    },
  },
  {
    id: "us_coachella",
    countryCode: "US",
    city: "Indio",
    name: "코첼라 뮤직 페스티벌",
    date: "2025-04-11",
    theme: ["음악", "야외", "팝문화"],
    location: { lat: 33.6784, lng: -116.2371 },
    info: {
      image: "../assets/images/us_coachella.png",
      description:
        "세계적인 아티스트들이 참여하는 미국 최대 음악 축제입니다. 캘리포니아 인디오에서 열리는 이 페스티벌은 록, 힙합, 일렉트로닉 등 다양한 장르를 아우르며, 세계적인 패션 트렌드와 아트 인스톨레이션이 함께 어우러지는 문화적 이벤트로 자리잡았습니다. 젊은 세대의 열광적인 참여로 유명합니다.",
    },
  },
  {
    id: "de_oktoberfest",
    countryCode: "DE",
    city: "Munich",
    name: "옥토버페스트",
    date: "2025-09-21",
    theme: ["맥주", "전통", "독일문화"],
    location: { lat: 48.1351, lng: 11.582 },
    info: {
      image: "../assets/images/de_oktoberfest.jpg",
      description:
        "독일 뮌헨에서 열리는 세계 최대 규모의 맥주 축제입니다. 200년 이상의 역사를 자랑하는 이 축제는 전통 의상을 입은 사람들이 각 지역 맥주를 즐기며 퍼레이드, 음악 공연, 놀이기구 등을 함께 즐깁니다. 지역 문화와 독일식 환대가 결합된 독특한 경험을 제공합니다.",
    },
  },
  {
    id: "es_tomatina",
    countryCode: "ES",
    city: "Buñol",
    name: "토마토 축제",
    date: "2025-08-27",
    theme: ["체험", "음식", "퍼포먼스"],
    location: { lat: 39.4206, lng: -0.7892 },
    info: {
      image: "../assets/images/es_tomatina.jpg",
      description:
        "수천 명이 토마토를 던지는 독특한 스페인 축제입니다. 매년 8월 마지막 주 수요일, 부뇰 마을 전체가 빨간 토마토로 물들며, 거리 곳곳에서 시작되는 토마토 전투는 유쾌하고 통쾌한 분위기를 만들어냅니다. 전 세계에서 모인 참가자들이 함께 스트레스를 날리는 이색적인 체험형 축제입니다.",
    },
  },
  {
    id: "cn_lantern_festival",
    countryCode: "CN",
    city: "Beijing",
    name: "중국 등불 축제",
    date: "2025-02-12",
    theme: ["등불", "전통", "설날"],
    location: { lat: 39.9042, lng: 116.4074 },
    info: {
      image: "../assets/images/cn_lantern_festival.jpg",
      description:
        "정월대보름에 열리는 중국 전통 등불 축제입니다. 가족 단위로 등불을 들고 거리를 걷거나 등불 수수께끼를 풀며, 화려한 용춤과 사자춤 공연이 함께 열립니다. 도시마다 독특한 전통 양식의 등불이 거리를 밝히며 설날을 마무리하는 중요한 행사입니다.",
    },
  },
  {
    id: "th_songkran",
    countryCode: "TH",
    city: "Bangkok",
    name: "송끄란",
    date: "2025-04-13",
    theme: ["물놀이", "새해", "전통"],
    location: { lat: 13.7563, lng: 100.5018 },
    info: {
      image: "../assets/images/th_songkran.jpg",
      description:
        "태국 전통 새해 맞이 축제로, 물을 뿌리는 놀이로 유명합니다. 태국 전역에서 열리는 이 축제는 가족 간의 정을 나누는 의식에서 시작되어, 거리에서는 누구나 서로에게 물을 뿌리며 더위를 식히고 행운을 기원합니다. 특히 방콕은 세계 각국의 여행자들이 모여 대규모 워터파티가 열리는 명소입니다.",
    },
  },
  {
    id: "au_sydney_nye",
    countryCode: "AU",
    city: "Sydney",
    name: "시드니 새해 불꽃놀이",
    date: "2025-12-31",
    theme: ["불꽃놀이", "새해", "야경"],
    location: { lat: -33.8688, lng: 151.2093 },
    info: {
      image: "../assets/images/au_sydney_nye.jpg",
      description:
        "세계에서 가장 먼저 새해를 맞는 도시 중 하나, 하버브리지 불꽃놀이가 인상적입니다. 오페라하우스와 하버브리지를 배경으로 펼쳐지는 이 불꽃쇼는 TV와 온라인을 통해 전 세계에 중계되며, 시드니의 상징적인 연말 행사로 자리잡았습니다. 수백만 명의 인파가 해변과 전망대에 모여 장관을 즐깁니다.",
    },
  },
];
