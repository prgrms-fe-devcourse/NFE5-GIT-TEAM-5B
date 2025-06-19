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
  {
    id: "in_holi",
    countryCode: "IN",
    city: "Mathura",
    name: "홀리 축제",
    date: "2025-03-14",
    theme: ["색채", "전통", "봄"],
    location: { lat: 27.4924, lng: 77.6737 },
    info: {
      image: "../assets/images/holi.jpg",
      description:
        "인도의 전통적인 봄맞이 축제로, 서로에게 색색의 가루와 물감을 뿌리며 축하합니다. '색의 축제'로도 불리며, 악을 물리치고 선을 기리는 의미를 담고 있습니다. 온 거리가 활기찬 색깔로 물들고, 음악과 춤이 어우러져 모두가 하나 되는 즐거운 분위기를 만듭니다.",
    },
  },
  {
    id: "ca_quebec_winter",
    countryCode: "CA",
    city: "Quebec City",
    name: "퀘벡 겨울 카니발",
    date: "2025-02-07",
    theme: ["겨울", "눈", "얼음조각"],
    location: { lat: 46.8139, lng: -71.208 },
    info: {
      image: "../assets/images/winterCarnival.png",
      description:
        "세계 최대 규모의 겨울 축제 중 하나로, 눈과 얼음을 이용한 다양한 활동이 펼쳐집니다. 얼음 조각 전시, 카누 경주, 개썰매 등 다채로운 프로그램이 있으며, 밤에는 화려한 조명과 함께 겨울밤의 낭만을 더합니다. 마스코트인 '본옴'과 함께 즐거운 겨울을 보낼 수 있습니다.",
    },
  },
  {
    id: "ie_st_patricks",
    countryCode: "IE",
    city: "Dublin",
    name: "성 패트릭 데이",
    date: "2025-03-17",
    theme: ["전통", "퍼레이드", "문화"],
    location: { lat: 53.3498, lng: -6.2603 },
    info: {
      image: "../assets/images/St-Patricks.jpg",
      description:
        "아일랜드의 수호성인 성 패트릭을 기리는 축제로, 전 세계적으로 초록색 퍼레이드가 펼쳐집니다. 더블린에서는 대규모 거리 행진과 함께 전통 음악, 춤, 공연이 어우러져 활기찬 분위기를 만듭니다. 아일랜드 문화를 체험하고 축하하는 의미 있는 날입니다.",
    },
  },
  {
    id: "us_mardi_gras",
    countryCode: "US",
    city: "New Orleans",
    name: "마디 그라",
    date: "2025-03-04",
    theme: ["카니발", "음악", "퍼레이드"],
    location: { lat: 29.9511, lng: -90.0715 },
    info: {
      image: "../assets/images/madi.avif",
      description:
        "미국 뉴올리언스에서 열리는 화려하고 열정적인 카니발 축제입니다. 형형색색의 의상과 가면을 쓴 사람들이 거리로 쏟아져 나와 퍼레이드를 즐기며, 재즈 음악이 도시를 가득 채웁니다. 독특한 비즈 던지기 문화와 함께 남부의 흥겨운 분위기를 만끽할 수 있습니다.",
    },
  },
  {
    id: "it_venice_carnival",
    countryCode: "IT",
    city: "Venice",
    name: "베네치아 카니발",
    date: "2025-02-22",
    theme: ["가면", "전통", "역사"],
    location: { lat: 45.4408, lng: 12.3155 },
    info: {
      image: "../assets/images/beneCarnival.jpg",
      description:
        "세계에서 가장 아름다운 카니발 중 하나로, 신비로운 가면과 화려한 의상이 특징입니다. 물의 도시 베네치아에서 열리며, 중세 시대로 돌아간 듯한 착각을 불러일으킵니다. 가면 무도회, 곤돌라 퍼레이드 등 우아하고 로맨틱한 분위기 속에서 이탈리아의 전통을 느낄 수 있습니다.",
    },
  },
  {
    id: "jp_sapporo_snow",
    countryCode: "JP",
    city: "Sapporo",
    name: "삿포로 눈 축제",
    date: "2025-02-04",
    theme: ["눈", "얼음", "조각"],
    location: { lat: 43.0621, lng: 141.3544 },
    info: {
      image: "../assets/images/sapporosnowfestival.jpg",
      description:
        "일본 삿포로에서 매년 2월에 열리는 세계적인 눈과 얼음 축제입니다. 오도리 공원을 중심으로 거대한 눈 조각상과 정교한 얼음 조각들이 전시되며, 밤에는 다채로운 조명과 함께 환상적인 분위기를 연출합니다. 겨울의 아름다움을 만끽할 수 있는 대표적인 행사입니다.",
    },
  },
  {
    id: "kr_boryeong_mud",
    countryCode: "KR",
    city: "Boryeong",
    name: "보령 머드 축제",
    date: "2025-07-18",
    theme: ["체험", "물놀이", "머드"],
    location: { lat: 36.3263, lng: 126.541 },
    info: {
      image: "../assets/images/mud.jpg",
      description:
        "충남 보령 대천해수욕장에서 열리는 세계적인 이색 축제입니다. 머드를 활용한 다양한 체험 프로그램과 머드 마사지, 머드 씨름 대회 등이 펼쳐져 남녀노소 모두가 즐길 수 있습니다. 여름 더위를 잊고 활기찬 에너지를 느낄 수 있는 유쾌한 축제입니다.",
    },
  },
  {
    id: "sg_lantern_festival",
    countryCode: "SG",
    city: "Singapore",
    name: "싱가포르 등불 축제",
    date: "2025-09-17",
    theme: ["등불", "문화", "야경"],
    location: { lat: 1.2903, lng: 103.8519 },
    info: {
      image: "../assets/images/singgapole.jpg",
      description:
        "중국의 전통 중추절(추석)을 기념하는 싱가포르의 등불 축제입니다. 가든스 바이 더 베이 등 주요 명소에 아름다운 등불 전시가 펼쳐지며, 다채로운 문화 공연과 함께 가족들이 모여 달을 감상하고 전통 음식을 나누는 시간을 가집니다.",
    },
  },
  {
    id: "es_running_of_bulls",
    countryCode: "ES",
    city: "Pamplona",
    name: "산 페르민 축제 (황소 달리기)",
    date: "2025-07-06",
    theme: ["전통", "스릴", "퍼포먼스"],
    location: { lat: 42.8169, lng: -1.6432 },
    info: {
      image: "../assets/images/cowrun.jpg",
      description:
        "스페인 팜플로나에서 열리는 세계적으로 유명한 축제로, 수많은 사람들이 황소와 함께 거리를 달리는 '엔시에로'로 유명합니다. 용감한 참가자들이 스릴 넘치는 경험을 위해 모이며, 축제 기간 내내 거리 공연과 파티가 끊이지 않습니다. 강렬한 스페인 문화를 느낄 수 있는 독특한 행사입니다.",
    },
  },
  {
    id: "us_burning_man",
    countryCode: "US",
    city: "Black Rock City",
    name: "버닝 맨",
    date: "2025-08-25",
    theme: ["예술", "자유", "공동체"],
    location: { lat: 40.7865, lng: -119.204 },
    info: {
      image: "../assets/images/burningman.jpeg",
      description:
        "미국 네바다주의 블랙 록 사막에서 열리는 독특한 예술 및 공동체 축제입니다. 참가자들이 직접 예술 작품을 만들고 설치하며, '맨'이라는 거대한 나무 조형물을 태우는 의식으로 마무리됩니다. 돈이 통용되지 않고, 자기 표현과 자립을 강조하는 실험적인 문화 행사입니다.",
    },
  },
  {
    id: "ca_calgary_stampede",
    countryCode: "CA",
    city: "Calgary",
    name: "캘거리 스탬피드",
    date: "2025-07-04",
    theme: ["카우보이", "로데오", "서부"],
    location: { lat: 51.0447, lng: -114.0719 },
    info: {
      image: "../assets/images/calguri.jpg",
      description:
        "캐나다 캘거리에서 열리는 세계적으로 유명한 로데오 축제입니다. '지상 최대의 야외 쇼'로 불리며, 프로 로데오 경기, 척웨건 경주, 콘서트, 퍼레이드 등 다양한 서부 문화 체험을 제공합니다. 카우보이 모자를 쓰고 축제에 참여하여 활기찬 분위기를 즐길 수 있습니다.",
    },
  },
  {
    id: "nl_kings_day",
    countryCode: "NL",
    city: "Amsterdam",
    name: "킹스 데이",
    date: "2025-04-27",
    theme: ["국경일", "파티", "오렌지"],
    location: { lat: 52.3676, lng: 4.9041 },
    info: {
      image: "../assets/images/kingDay.png",
      description:
        "네덜란드 국왕의 생일을 기념하는 전국적인 축제로, 온 나라가 오렌지색으로 물들고 대규모 거리 파티가 열립니다. 암스테르담에서는 운하에서 보트 파티가 열리고, 거리 곳곳에서 벼룩시장이 열려 활기찬 분위기를 만듭니다. 네덜란드 사람들의 자유분방하고 즐거운 에너지를 느낄 수 있습니다.",
    },
  },
  {
    id: "uk_notting_hill_carnival",
    countryCode: "UK",
    city: "London",
    name: "노팅힐 카니발",
    date: "2025-08-24",
    theme: ["카니발", "음악", "문화"],
    location: { lat: 51.5173, lng: -0.2117 },
    info: {
      image: "../assets/images/notinghill.webp",
      description:
        "런던 노팅힐 지역에서 열리는 유럽 최대 규모의 거리 카니발입니다. 카리브해 문화의 영향을 받아 화려한 의상, 스틸 밴드 음악, 레게와 소카 음악이 어우러져 흥겨운 분위기를 만듭니다. 다양한 음식과 함께 런던의 다문화적인 면모를 경험할 수 있습니다.",
    },
  },
  {
    id: "ir_rose_festival",
    countryCode: "IR",
    city: "Kashan",
    name: "페르시아 장미 축제",
    date: "2025-05-15",
    theme: ["꽃", "향기", "전통"],
    location: { lat: 33.9877, lng: 51.4116 },
    info: {
      image: "../assets/images/rose.jpg",
      description:
        "이란 카샨 지역에서 매년 5월 중순에 열리는 장미 수확 및 장미수 증류 축제입니다. 장미밭에서 신선한 장미를 수확하고, 전통 방식으로 장미수를 만드는 과정을 볼 수 있습니다. 아름다운 장미 향기와 함께 페르시아의 고유한 문화와 전통을 체험할 수 있습니다.",
    },
  },
  {
    id: "mx_day_of_dead",
    countryCode: "MX",
    city: "Mexico City",
    name: "죽은 자들의 날",
    date: "2025-11-01",
    theme: ["전통", "문화", "추모"],
    location: { lat: 19.4326, lng: -99.1332 },
    info: {
      image: "../assets/images/death.webp",
      description:
        "멕시코의 전통적인 추모 축제로, 죽은 자들이 가족과 함께 돌아오는 날이라고 믿습니다. 화려한 해골 분장과 의상, 제단 장식, 마리골드 꽃 등으로 도시 전체가 축제 분위기로 변합니다. 삶과 죽음에 대한 멕시코인들의 독특한 시각을 엿볼 수 있습니다.",
    },
  },
  {
    id: "au_vivid_sydney",
    countryCode: "AU",
    city: "Sydney",
    name: "비비드 시드니",
    date: "2025-05-23",
    theme: ["빛", "음악", "아이디어"],
    location: { lat: -33.8688, lng: 151.2093 },
    info: {
      image: "../assets/images/sydny.jpg",
      description:
        "시드니의 겨울밤을 밝히는 빛, 음악, 아이디어 축제입니다. 오페라하우스와 하버브리지를 비롯한 시드니의 주요 랜드마크들이 화려한 조명과 미디어 아트로 물들고, 라이브 음악 공연과 창의적인 강연들이 펼쳐집니다. 시드니의 밤을 예술로 채우는 환상적인 경험을 제공합니다.",
    },
  },
  {
    id: "za_national_arts",
    countryCode: "ZA",
    city: "Makhanda",
    name: "남아공 국립 예술 축제",
    date: "2025-06-26",
    theme: ["예술", "공연", "문화"],
    location: { lat: -33.3032, lng: 26.5204 },
    info: {
      image: "../assets/images/south.jpg",
      description:
        "남아프리카 공화국 마칸다에서 열리는 아프리카 최대 규모의 예술 축제입니다. 연극, 춤, 음악, 시각 예술, 문학 등 다양한 장르의 공연과 전시가 펼쳐지며, 남아공의 풍부한 문화적 다양성을 경험할 수 있습니다. 신진 예술가들의 등용문이기도 합니다.",
    },
  },
  {
    id: "jp_cherry_blossom",
    countryCode: "JP",
    city: "Tokyo",
    name: "일본 벚꽃 축제",
    date: "2025-03-25",
    theme: ["자연", "봄", "경관"],
    location: { lat: 35.6895, lng: 139.6917 },
    info: {
      image: "../assets/images/jpflo.avif",
      description:
        "일본 전역에서 봄을 알리는 대표적인 축제로, 벚꽃이 만개하는 시기에 맞춰 열립니다. 도쿄의 우에노 공원, 메구로 강 등 유명 벚꽃 명소에서는 꽃놀이(하나미)를 즐기며 피크닉을 하거나, 야간 라이트업된 벚꽃을 감상하며 봄의 정취를 만끽합니다.",
    },
  },
  {
    id: "us_balloon_fiesta",
    countryCode: "US",
    city: "Albuquerque",
    name: "앨버커키 국제 열기구 축제",
    date: "2025-10-04",
    theme: ["항공", "경관", "가을"],
    location: { lat: 35.0844, lng: -106.6504 },
    info: {
      image: "../assets/images/turc.jpg",
      description:
        "미국 뉴멕시코주 앨버커키에서 열리는 세계 최대 규모의 열기구 축제입니다. 수백 개의 열기구가 동시에 하늘로 떠오르는 장관은 '떠다니는 미술관'이라 불릴 만큼 아름답습니다. 새벽 비행, 야간 발광 등 다채로운 이벤트가 펼쳐져 방문객들에게 잊지 못할 경험을 선사합니다.",
    },
  },
  {
    id: "ar_tango_festival",
    countryCode: "AR",
    city: "Buenos Aires",
    name: "부에노스아이레스 탱고 축제",
    date: "2025-08-14",
    theme: ["댄스", "음악", "문화"],
    location: { lat: -34.6037, lng: -58.3816 },
    info: {
      image: "../assets/images/tango.jpg",
      description:
        "아르헨티나 부에노스아이레스에서 열리는 세계적인 탱고 축제입니다. 프로 및 아마추어 댄서들의 공연, 탱고 수업, 밀롱가(탱고 춤을 추는 파티) 등 탱고와 관련된 모든 것을 경험할 수 있습니다. 탱고의 고향에서 열정적인 아르헨티나의 문화를 만끽할 수 있습니다.",
    },
  },
];
