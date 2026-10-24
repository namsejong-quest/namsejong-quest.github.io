/* 남세종 QUEST – 데이터 레이어
   실제 자료 출처:
   - 세종시청 아동/청소년복지 > 남세종종합청소년센터 시설이용안내 / 이용공간
   - 청소년정보포털 누리다 (https://www2.sejong.go.kr/youth/)
   - 세종시 공지 "재능개발공간 사용 안내(사전교육)" / 대관 안내
   - 세종의소리·세종포스트 개관 기사 (2021.01.13)
*/
window.NSQ = window.NSQ || {};

NSQ.CENTER = {
  name: '남세종종합청소년센터',
  short: '남세종센터',
  address: '세종특별자치시 달빛1로 227 (아름동 811)',
  mapUrl: 'https://kko.kakao.com/V2oZcQi3T2',
  director: '안종배 센터장',
  intro: '청소년기본법 제18조(청소년시설의 설치·운영)에 의거하여 세종특별자치시 직영으로 운영되고 있는 청소년 기관입니다.',
  theme: '세종 청소년의 미래, 행복을 디자인하다',
  phone: '044-300-4970',
  contacts: [
    ['대표 · 교육문화팀', '044-300-4970'], ['청소년사업팀', '044-300-4974'], ['재능개발공간 사전교육', '044-300-4978'],
    ['대관 담당', '044-300-4977'], ['정규강좌 · 팝업특강', '044-300-4981'], ['진로활동 · 세계 청소년의 날', '044-300-4982'],
    ['환경 프로그램', '044-300-4985'], ['유스데이 · AID상상이룸이', '044-300-4979'], ['청소년전화 (24시간)', '1388'],
  ],
  history: [
    ['2017', '아름동 부지 매입'], ['2018', '실시설계 · 착공'], ['2020.08', '건물 준공 (지상 3층 · 지하 1층, 연면적 5,780.43㎡)'],
    ['2020.12', '시범 운영'], ['2021.01.13', '개관 · 세종특별자치시 직영'], ['2026.01', '성평등가족부 청소년수련시설 종합평가 최우수 (전국 수련관 206곳 중 20곳)'],
    ['2026.04.29', '㈜엘콤XR과 청소년 미래역량 강화(XR·피지컬AI) 업무협약'], ['2026', '개관 5주년'],
  ],
  areas: [
    ['🌱', '환경활동', '환경기획단, 탄소없데이, 에코뉴스, 그린무브'], ['💻', '디지털융합활동', 'AI윤리, 액션트랙플레이, 글로벌선도기술'],
    ['🧭', '진로활동', '직업인 직업체험, 출발드림틴, 달빛꿈지기'], ['🌏', '교류활동', '농촌을 잇다, 월드플레이트, 청소년나라사랑활동'],
    ['🙋', '참여활동', '청소년운영위원회, 봉사활동, 자치기구연합회'], ['🎭', '문화예술활동', '청소년학당1446, 청소년의 날 기념행사, 달빛제'],
    ['📚', '교육문화활동', '정규강좌, 방학특강, 찾아가는 특강'],
  ],
  phoneEdu: '044-300-4978',
  phoneRental: '044-300-4977',
  hours: [
    { d: '화~금', t: '09:00 ~ 20:00' },
    { d: '토', t: '09:00 ~ 18:00' },
    { d: '일', t: '10:00 ~ 18:00' },
    { d: '월·공휴일', t: '휴관' },
  ],
  target: '세종시 청소년(9~24세) 및 청소년 동반 가족',
  building: '지상 3층 · 지하 1층, 연면적 5,780㎡',
  opened: '2021년 1월 13일 개관 · 세종특별자치시 직영',
  links: {
    nurida: 'https://www2.sejong.go.kr/youth/',
    facility: 'https://www.sejong.go.kr/welfare/sub04_05_01_01.do',
    spaces: 'https://www.sejong.go.kr/welfare/sub04_05_03.do',
    apply: 'https://www.sejong.go.kr/prog/petition/1022/list.do',
    rental: 'https://www2.sejong.go.kr/youth/kor/sub02_04_01.do',
    notices: 'https://www2.sejong.go.kr/youth/prog/bbsArticle/BBSMSTR_000000000231/list.do',
    gallery: 'https://www2.sejong.go.kr/youth/bbs/BBSMSTR_000000000196/list.do',
    programs: 'https://www2.sejong.go.kr/youth/prog/progrm/kor/sub03_02/list.do',
    edu: 'https://www2.sejong.go.kr/youth/prog/progrm/kor/sub03_02/view.do?progrmNo=1934&tmeNo=1',
    talentBook: 'https://www2.sejong.go.kr/youth/prog/progrm/kor/sub03_02/view.do?progrmNo=1933&tmeNo=1',
    instagram: 'https://www.instagram.com/namsejong_youth/',
    youtube: 'https://www.youtube.com/@nam_youth',
    kakao: 'https://pf.kakao.com/_QuMLK',
  },
  instagramHandle: '@namsejong_youth',
  youtubeHandle: '@nam_youth',
};

/* 학생 아이디어 크레딧 (기능 옆에 살짝 표시) */
NSQ.CREDITS = {
  ryu: { name: '류영진', idea: '층별 입체 맵 · 시설별 미니게임 퀘스트' },
  kim: { name: '김건우', idea: '시간대 예약 · QR 체크인 10분 룰 · 포인트 장부 · 쿠폰 바코드' },
  han: { name: '한은진', idea: '퀘스트 로드 · 퀴즈 해설 · 짝맞추기 · 단어 퍼즐 · 리그 랭킹' },
  jo: { name: '조유빈', idea: '일일 출석 스트릭 · 동아리 길드 · 배지 희귀도' },
  hwang: { name: '황시윤', idea: '청소년증 등록 · 사진/SNS 인증 · 프로그램 캘린더 · 자율/승인형 예약' },
  seo: { name: '서효주', idea: '오늘의 미션 로테이션 · 미션 방법 단계 · 스탬프 쾅 · 교환권 직원확인' },
  go: { name: '고재혁', idea: '친구들 기획에서 하나씩 골라 다듬은 캘린더 · 포인트 장부 · 센터 맵 · 활동 피드 · 마음쉼터' },
  baek: { name: '백지원', idea: '커리큘럼 타임라인 · 예약 폼 자동포맷 · 완료→보상받기 2단계 · 상품권 교환소' },
};

/* 구역(실제 운영 구분) */
NSQ.ZONES = {
  free: {
    id: 'free', name: '자율이용공간', color: '#3182F6',
    rule: '현장접수 · 대기 가능 · 사전예약 불가',
    desc: '많은 청소년이 함께 쓰도록 예약을 받지 않아요. 당일 이용 현황은 센터 유튜브 라이브에서 확인할 수 있어요.',
  },
  talent: {
    id: 'talent', name: '재능개발공간', color: '#7C3AED',
    rule: '사전교육 이수 후 예약 · 1회 최대 3시간',
    desc: '사전교육은 매주 화~토 14:30 / 15:00 / 15:30 / 16:00 / 16:30, 최소 1일 전에 신청해요. 노쇼 3회면 재교육!',
  },
  program: {
    id: 'program', name: '프로그램실', color: '#F04452',
    rule: '프로그램 참여 · 단체 대관',
    desc: '청소년 프로그램이 열리는 공간이에요. 누리다에서 프로그램을 신청하면 이용할 수 있어요.',
  },
};

NSQ.FACILITIES = [
  // 자율이용공간
  { id: 'bookcafe', zone: 'free', name: '북카페', emoji: '☕', floor: '1F',
    items: ['보드게임', '레고', '도서', '휴게 공간'],
    desc: '보드게임·레고·책이 있는 열린 휴식 공간. 자유롭게 들어와 쉬어가요.',
    rules: ['조용한 대화', '다 쓴 보드게임은 제자리에', '음료는 뚜껑 있는 컵만'] },
  { id: 'nintendo', zone: 'free', name: '닌텐도', emoji: '🎮', floor: '1F',
    items: ['본체', '조이콘', '게임칩'],
    desc: '닌텐도 본체·조이콘·게임칩을 현장에서 빌려 친구와 플레이해요.',
    rules: ['대기자가 있으면 순서 양보', '조이콘 스트랩 착용', '기기 소중히'] },
  { id: 'gym', zone: 'free', name: '다목적 체육관', emoji: '🏀', floor: '1F', area: '552㎡ · 200명',
    items: ['농구공', '배구공', '피구공', '배드민턴', '탁구용품'],
    desc: '농구·배구·피구·배드민턴·탁구가 가능한 체육관. 축구·야구·족구는 이용할 수 없어요.',
    rules: ['실내 전용 운동화', '축구·야구·족구 금지', '사용 후 용품 반납'] },
  { id: 'dance', zone: 'free', name: '댄스연습실 (3실)', emoji: '💃', floor: '3F',
    items: ['전면거울', '블루투스 스피커'],
    desc: '전면 거울과 블루투스 스피커가 있는 댄스연습실 3개. 커버댄스·숏폼 연습에 딱!',
    rules: ['실내화 착용', '적정 음량', '퇴실 시 스피커 전원 끄기'] },
  { id: 'karaoke', zone: 'free', name: '노래연습실 (3실)', emoji: '🎤', floor: '3F',
    items: ['마이크', '노래방기기'],
    desc: '노래방 기기와 마이크가 있는 노래연습실 3개. 스트레스 날리기 좋은 곳.',
    rules: ['마이크 위생 커버', '음식물 반입 금지', '시간 준수'] },
  // 재능개발공간
  { id: 'digital', zone: 'talent', name: '디지털 창작실', emoji: '💻', floor: '2F',
    items: ['PC 13대', '타블렛', '화이트보드', '빔프로젝터'],
    desc: 'PC 13대와 타블렛이 있는 창작실. 드로잉·코딩·영상 편집까지.',
    rules: ['사전교육 이수 필수', '사용 후 로그아웃', '개인 교습·과외 금지'] },
  { id: 'beauty', zone: 'talent', name: '뷰티룸', emoji: '💄', floor: '2F',
    items: ['화장대', '거울', '네일램프'],
    desc: '화장대·거울·네일램프가 있는 뷰티 체험 공간.',
    rules: ['사전교육 이수 필수', '사용한 도구 정리', '고열 기기 플러그 분리'] },
  { id: 'vocal', zone: 'talent', name: '개인연습실 1', emoji: '🎧', floor: '3F',
    items: ['마이크', '헤드셋', '태블릿'],
    desc: '마이크·헤드셋·태블릿이 있는 1인 보컬 연습실.',
    rules: ['사전교육 이수 필수', '1회 최대 3시간', '장비 원위치'] },
  { id: 'band', zone: 'talent', name: '악기연습실 2', emoji: '🥁', floor: '3F',
    items: ['드럼', '키보드', '마이크', '보면대'],
    desc: '드럼·키보드·마이크가 있는 악기연습실 2개. 밴드 합주 가능.',
    rules: ['사전교육 이수 필수', '볼륨 0으로 내리고 전원 끄기', '케이블 정리'] },
  // 프로그램실
  { id: 'cooking', zone: 'program', name: '창의요리활동실', emoji: '🧁', floor: '1F', area: '100㎡ · 24명',
    items: ['조리대 7개', '오븐', '반죽기', '냉장고'],
    desc: '조리대 7개와 오븐·반죽기가 있는 요리·제과제빵 실습실.',
    rules: ['위생모·앞치마', '칼·오븐 안전', '설거지 후 퇴실'] },
  { id: 'climbing', zone: 'program', name: '스포츠클라이밍장', emoji: '🧗', floor: '1F',
    items: ['클라이밍 장비', '빔프로젝터'],
    desc: '클라이밍 장비가 갖춰진 실내 스포츠클라이밍장.',
    rules: ['암벽화 착용', '매트 위 대기 금지', '한 루트 한 명'] },
  { id: 'hall', zone: 'program', name: '다목적 공연장', emoji: '🎭', floor: '2F', area: '353㎡ · 200명',
    items: ['음향·조명장비', '계단식 전동의자', '무대'],
    desc: '무대·음향·조명과 계단식 전동의자가 있는 200석 공연장.',
    rules: ['행사 승인 후 이용', '장비 임의 조작 금지', '현수막 가로 최대 12m'] },
  { id: 'studio', zone: 'program', name: '방송제작실', emoji: '🎥', floor: '1F',
    items: ['카메라', '컴퓨터', '음향장비', '크로마키'],
    desc: '카메라·크로마키·음향장비가 있는 방송 콘텐츠 제작실.',
    rules: ['고가 장비 주의', '녹화 파일 개인 백업', '케이블 발걸림 주의'] },
  { id: 'meeting', zone: 'program', name: '중회의실', emoji: '🗣️', floor: '2F', area: '81㎡ · 25명',
    items: ['책상', '의자', '프로젝터'],
    desc: '25명 규모의 회의실. 동아리 회의·청소년 포럼에 사용돼요.',
    rules: ['대관 신청(7~30일 전)', '정숙', '사용 후 정리'] },
];
/* 시설 현황표 기준 층별 전체 방 목록 (퀘스트 없는 방 포함) */
NSQ.FLOOR_ROOMS = {
  '3F': ['댄스연습실 1~3', '노래연습실 1~3', '개인연습실 1~2', '악기연습실 1~2'],
  '2F': ['다목적공연장', '디지털창작실', '종합창작실', '뷰티룸', '중회의실', '소회의실', '동아리실 1~3', '아름청소년방과후아카데미'],
  '1F': ['안내데스크·사무실', '다목적체육관', '북카페 · 닌텐도', '창의요리활동실', '방송제작실', '스포츠클라이밍장', '청소년운영위원회실', '모둠활동실 1~2', '상담실', '양호실', '탈의실'],
};
NSQ.facility = id => NSQ.FACILITIES.find(f => f.id === id);

/* 퀘스트 로드 – 챕터별로 하나씩 열려요 */
NSQ.CHAPTERS = [
  { id: 'c1', title: '센터 첫걸음', emoji: '🚪', desc: '남세종센터와 처음 인사하기', credit: 'seo' },
  { id: 'c2', title: '자율이용공간 탐방', emoji: '🛝', desc: '예약 없이 바로 쓰는 5개 공간', credit: 'hwang' },
  { id: 'c3', title: '재능개발공간 도전', emoji: '🎨', desc: '사전교육 듣고 창작실 열기', credit: 'ryu' },
  { id: 'c4', title: '프로그램실 체험', emoji: '🍳', desc: '요리·클라이밍·방송·공연', credit: 'baek' },
  { id: 'c5', title: '함께하는 남세종', emoji: '🤝', desc: 'SNS·봉사·동아리·마음 챙김', credit: 'han' },
];

NSQ.QUESTS = [
  // ───── 1장 센터 첫걸음
  { id: 'q01', photo: 'img/gal/10Li1aU0_0.jpg', ch: 'c1', title: '웰컴 체크인', sub: '1층 안내데스크에서 시작', fac: null, emoji: '🙋',
    howTo: ['센터 1층 안내데스크로 가요', '일일시설이용대장에 이름을 적어요', '데스크 옆 QR을 스캔하면 체크인 완료!'],
    tip: '화~금 09:00~20:00, 토 09:00~18:00, 일 10:00~18:00 운영. 월요일은 쉬어요.',
    game: { type: 'quiz', items: [
      { q: '남세종종합청소년센터가 쉬는 요일은?', o: ['월요일', '화요일', '토요일', '일요일'], a: 0, why: '월요일과 법정공휴일은 휴관이에요.' },
    ] },
    proof: { type: 'qr', label: '안내데스크 QR 스캔' },
    reward: { xp: 30, pts: 100, badge: 'b_welcome' }, credit: 'hwang' },
  { id: 'q02', photo: 'img/gal/60Fq2yI0_0.jpg', ch: 'c1', title: '센터 한눈에 퀴즈', sub: '남세종센터 기본 상식 3문제', fac: null, emoji: '🧠',
    howTo: ['센터 안내 리플렛이나 1층 안내판을 읽어요', '퀴즈 3문제를 풀어요', '해설까지 읽으면 센터 박사!'],
    tip: '센터는 세종시 직영, 9~24세 청소년과 동반 가족이 이용할 수 있어요.',
    game: { type: 'quiz', items: [
      { q: '남세종센터의 이용 대상 나이는?', o: ['5~12세', '9~24세', '19세 이상', '제한 없음'], a: 1, why: '청소년기본법에 따라 9~24세 청소년과 동반 가족이 이용해요.' },
      { q: '자율이용공간(북카페·닌텐도·체육관 등) 이용 방법은?', o: ['인터넷 사전예약', '현장접수', '전화예약', '추첨'], a: 1, why: '많은 청소년이 쓰도록 예약 없이 현장접수로 운영해요.' },
      { q: '남세종종합청소년센터가 문을 연 해는?', o: ['2019년', '2021년', '2023년', '2025년'], a: 1, why: '2021년 1월 13일 개관! 2026년에 개관 5주년을 맞았어요.' },
      { q: '2026년 남세종센터가 청소년수련시설 종합평가에서 받은 등급은?', o: ['보통', '우수', '최우수', '미흡'], a: 2, why: '전국 청소년수련관 206곳 중 20곳만 받은 최우수 등급이에요.' },
      { q: '재능개발공간을 쓰려면 먼저 해야 하는 것은?', o: ['회비 납부', '사전교육 이수', '보호자 동반', '시험 통과'], a: 1, why: '디지털창작실·뷰티룸·연습실은 사전교육(30~40분) 이수자만 예약할 수 있어요.' },
    ] },
    proof: { type: 'none' },
    reward: { xp: 40, pts: 120 }, credit: 'han' },
  { id: 'q03', ch: 'c1', title: '내 청소년증 만들기', sub: '프로필 사진 등록', fac: null, emoji: '🪪',
    howTo: ['정면을 보고 밝은 곳에서 사진을 찍어요', '배경이 깔끔한지 확인해요', '등록하면 모바일 청소년 카드가 생겨요'],
    tip: '사진은 이 기기에만 저장돼요.',
    game: null,
    proof: { type: 'photo', label: '프로필 사진 등록', checks: ['얼굴이 보여요', '조명이 밝아요', '배경이 깔끔해요'] },
    reward: { xp: 30, pts: 80, badge: 'b_idcard' }, credit: 'hwang' },

  // ───── 2장 자율이용공간
  { id: 'q04', photo: 'img/prog/p2051.jpg', ch: 'c2', title: '북카페에서 한 페이지', sub: '책 한 권, 보드게임 한 판', fac: 'bookcafe', emoji: '📖',
    howTo: ['북카페에 들어가 마음에 드는 책을 골라요', '20분 자유 독서 또는 보드게임 한 판', '책 표지나 게임판을 사진으로 남겨요'],
    tip: '레고 테이블도 있어요. 다 쓴 건 제자리에!',
    game: { type: 'word', sentence: ['북카페에서는', '다음', '친구를', '위해', '조용히', '아껴', '써요'], hint: '북카페 이용 매너 문장을 순서대로!' },
    proof: { type: 'photo', label: '책 표지 / 보드게임 인증' },
    reward: { xp: 40, pts: 100, badge: 'b_book' }, credit: 'han' },
  { id: 'q05', ch: 'c2', title: '닌텐도 챔피언', sub: '현장접수 후 한 판', fac: 'nintendo', emoji: '🎮',
    howTo: ['안내데스크에서 닌텐도 현장접수', '본체·조이콘·게임칩을 받아요', '플레이 화면을 인증해요'],
    tip: '대기자가 있으면 시간을 지켜 순서를 양보해요.',
    game: { type: 'match', pairs: [['북카페', '보드게임·레고'], ['닌텐도', '조이콘'], ['체육관', '실내 운동화'], ['노래연습실', '마이크 커버']] },
    proof: { type: 'photo', label: '플레이 화면 인증' },
    reward: { xp: 40, pts: 100, badge: 'b_game' }, credit: 'han' },
  { id: 'q06', photo: 'img/prog/p2037.jpg', ch: 'c2', title: '오운완! 체육관', sub: '농구·배드민턴·탁구 중 택1', fac: 'gym', emoji: '🏀',
    howTo: ['실내 전용 운동화로 갈아 신어요', '데스크에서 공이나 라켓을 빌려요', '운동 인증샷을 남겨요'],
    tip: '축구·야구·족구는 안전상 이용 금지예요.',
    game: { type: 'shot', need: 3 },
    proof: { type: 'photo', label: '운동 인증' },
    reward: { xp: 50, pts: 150, badge: 'b_sport' }, credit: 'ryu' },
  { id: 'q07', ch: 'c2', title: '오늘의 플레이리스트', sub: '노래연습실에서 한 곡', fac: 'karaoke', emoji: '🎤',
    howTo: ['노래연습실 현장접수', '마이크 위생 커버를 씌워요', '선곡 화면이나 점수를 인증해요'],
    tip: '3실 모두 방음이라 마음껏 불러도 돼요.',
    game: { type: 'tune', target: 62, tol: 7 },
    proof: { type: 'photo', label: '선곡/점수 인증' },
    reward: { xp: 40, pts: 100, badge: 'b_vocal' }, credit: 'ryu' },
  { id: 'q08', photo: 'img/prog/p2044.jpg', ch: 'c2', title: '댄스 챌린지', sub: '전면 거울 앞 숏폼', fac: 'dance', emoji: '💃',
    howTo: ['댄스연습실 현장접수', '블루투스 스피커에 음악을 연결해요', '거울 앞 연습 장면을 인증해요'],
    tip: '실내화 착용, 퇴실 시 스피커 전원 OFF!',
    game: { type: 'rhythm', beats: 10, need: 7 },
    proof: { type: 'photo', label: '안무 연습 인증' },
    reward: { xp: 50, pts: 150, badge: 'b_dance' }, credit: 'ryu' },

  // ───── 3장 재능개발공간
  { id: 'q09', photo: 'img/prog/p1934.jpg', ch: 'c3', title: '사전교육 이수하기', sub: '재능개발공간의 열쇠', fac: 'digital', emoji: '🔑',
    howTo: ['예약 탭에서 사전교육 회차(14:30~16:30)를 신청해요 (최소 1일 전)', '센터에 방문해 30~40분 교육을 들어요', '이수하면 디지털창작실·뷰티룸·연습실 예약이 열려요'],
    tip: '전화 신청도 가능: 044-300-4978. 노쇼 3회면 다시 들어야 해요.',
    game: { type: 'quiz', items: [
      { q: '재능개발공간 1회 최대 이용 시간은?', o: ['1시간', '2시간', '3시간', '제한 없음'], a: 2, why: '센터 운영시간 내 1회 최대 3시간이에요.' },
      { q: '이용예약 노쇼가 몇 번이면 사전교육을 다시 들어야 할까요?', o: ['1회', '2회', '3회', '5회'], a: 2, why: '노쇼 3회 발생 시 재교육 후 예약 가능!' },
    ] },
    proof: { type: 'reserve', what: 'edu', label: '사전교육 신청' },
    reward: { xp: 60, pts: 200, badge: 'b_key' }, credit: 'hwang' },
  { id: 'q10', photo: 'img/gal/34Oe0jK8_0.jpg', ch: 'c3', title: '디지털 크리에이터', sub: '타블렛으로 그리거나 코드 짜기', fac: 'digital', emoji: '💻',
    howTo: ['디지털 창작실을 예약해요(최대 3시간)', 'PC·타블렛으로 드로잉이나 코딩 작업', '작업물을 캡처해 인증해요'],
    tip: '사용 후 꼭 로그아웃!',
    game: { type: 'seq', title: '버그 3개를 순서대로 고쳐요', items: ['세미콜론 추가', '변수 이름 수정', '괄호 닫기'], shuffle: true },
    proof: { type: 'photo', label: '작업물 캡처 인증' },
    reward: { xp: 60, pts: 200, badge: 'b_maker' }, credit: 'ryu' },
  { id: 'q11', photo: 'img/prog/p2052.jpg', ch: 'c3', title: '퍼스널 컬러 찾기', sub: '뷰티룸 스타일링', fac: 'beauty', emoji: '💄',
    howTo: ['뷰티룸을 예약해요', '화장대 조명 아래 퍼스널 컬러 드레이프 테스트', '베스트 컬러를 기록해요'],
    tip: '고데기 등 고열 기기는 사용 후 플러그를 뽑아요.',
    game: { type: 'color', rounds: 3 },
    proof: { type: 'none' },
    reward: { xp: 50, pts: 150, badge: 'b_beauty' }, credit: 'ryu' },
  { id: 'q12', ch: 'c3', title: '롱톤 보컬 트레이닝', sub: '개인연습실 1', fac: 'vocal', emoji: '🎧',
    howTo: ['개인연습실 1을 예약해요', '헤드셋을 끼고 마이크 체크', '한 음을 길게 유지하는 롱톤 연습'],
    tip: '태블릿에 반주 앱을 띄워 연습할 수 있어요.',
    game: { type: 'hold', seconds: 4 },
    proof: { type: 'none' },
    reward: { xp: 50, pts: 150 }, credit: 'ryu' },
  { id: 'q13', photo: 'img/gal/87Tl8gH1_0.jpg', ch: 'c3', title: '원팀 밴드 합주', sub: '악기연습실 2', fac: 'band', emoji: '🥁',
    howTo: ['악기연습실을 예약해요', '드럼·키보드 볼륨을 0에서 천천히 올려요', '합주 사진을 인증해요'],
    tip: '퇴실 시 볼륨 0, 전원 OFF, 케이블 정리!',
    game: { type: 'seq', title: '8비트 드럼 패턴을 순서대로', items: ['킥', '하이햇', '스네어', '하이햇'], shuffle: false, repeat: 2 },
    proof: { type: 'photo', label: '합주 인증' },
    reward: { xp: 60, pts: 200, badge: 'b_band' }, credit: 'ryu' },

  // ───── 4장 프로그램실
  { id: 'q14', photo: 'img/prog/p2053.jpg', ch: 'c4', title: '달콤한 파티시에', sub: '창의요리활동실 베이킹', fac: 'cooking', emoji: '🧁',
    howTo: ['프로그램 탭에서 요리·베이킹 프로그램을 신청해요', '위생모·앞치마를 착용해요', '완성한 디저트를 인증해요'],
    tip: '조리대 7개, 오븐·반죽기 완비!',
    game: { type: 'seq', title: '마카롱 레시피 순서대로', items: ['아몬드가루 체치기', '머랭 올리기', '마카로나주', '짜기', '굽기'], shuffle: true },
    proof: { type: 'photo', label: '디저트 인증' },
    reward: { xp: 70, pts: 250, badge: 'b_chef' }, credit: 'baek' },
  { id: 'q15', photo: 'img/prog/p2017.jpg', ch: 'c4', title: '클라이밍 홀드 마스터', sub: '스포츠클라이밍장', fac: 'climbing', emoji: '🧗',
    howTo: ['클라이밍 프로그램을 신청해요', '암벽화·안전장비를 착용해요', '완등 홀드를 잡은 사진을 인증해요'],
    tip: '매트 위에서 대기하지 않기, 한 루트에 한 명!',
    game: { type: 'climb', holds: 6 },
    proof: { type: 'photo', label: '완등/장비 인증' },
    reward: { xp: 70, pts: 250, badge: 'b_climb' }, credit: 'baek' },
  { id: 'q16', photo: 'img/gal/58Zx2yX3_0.jpg', ch: 'c4', title: '온에어 방송국', sub: '방송제작실 크로마키', fac: 'studio', emoji: '🎥',
    howTo: ['미디어 프로그램을 신청해요', '크로마키 앞에서 앵커 포즈!', '촬영 장면을 인증해요'],
    tip: '녹화 파일은 개인 저장장치에 백업하세요.',
    game: { type: 'dj' },
    proof: { type: 'photo', label: '방송 포즈 인증' },
    reward: { xp: 60, pts: 200, badge: 'b_onair' }, credit: 'ryu' },
  { id: 'q17', photo: 'img/gal/37Qn2uG8_1.jpg', ch: 'c4', title: '스포트라이트 ON', sub: '다목적 공연장 무대', fac: 'hall', emoji: '🎭',
    howTo: ['공연·발표 프로그램에 참여해요', '무대 조명과 음향을 체크해요', '무대 위 인증샷!'],
    tip: '200석 계단식 전동의자가 있는 센터 대표 공연장이에요.',
    game: { type: 'sliders', labels: ['RED', 'BLUE', 'GOLD'] },
    proof: { type: 'photo', label: '무대 인증' },
    reward: { xp: 60, pts: 200, badge: 'b_stage' }, credit: 'ryu' },

  // ───── 5장 함께하는 남세종
  { id: 'q18', ch: 'c5', title: '남세종 팔로워', sub: '인스타 @namsejong_youth', fac: null, emoji: '📸',
    howTo: ['아래 버튼으로 센터 인스타그램을 열어요', '팔로우를 눌러요', '팔로우 화면을 캡처해 인증해요'],
    tip: '행사·프로그램 소식이 가장 빨리 올라와요.',
    game: null,
    proof: { type: 'social', link: 'instagram', label: '팔로우 캡처 인증' },
    reward: { xp: 30, pts: 100, badge: 'b_insta' }, credit: 'hwang' },
  { id: 'q19', photo: 'img/gal/67Ic2nX4_0.jpg', ch: 'c5', title: '유튜브 메이트', sub: '이용현황 라이브 채널 구독', fac: null, emoji: '▶️',
    howTo: ['센터 유튜브(@nam_youth)를 열어요', '구독을 눌러요', '자율이용공간 이용 현황 라이브를 확인해요'],
    tip: '가기 전에 라이브로 북카페·체육관이 붐비는지 볼 수 있어요.',
    game: null,
    proof: { type: 'social', link: 'youtube', label: '구독 캡처 인증' },
    reward: { xp: 30, pts: 100, badge: 'b_tube' }, credit: 'hwang' },
  { id: 'q20', photo: 'img/gal/39Ha3vQ2_1.jpg', ch: 'c5', title: '에코 플로깅', sub: '센터 주변 환경정화 봉사', fac: null, emoji: '🌱',
    howTo: ['봉사 프로그램을 신청해요', '센터 주변을 걸으며 쓰레기를 주워요', '분리배출 사진을 인증하면 봉사시간도!'],
    tip: '1365 자원봉사포털 ID를 미리 준비하세요.',
    game: { type: 'seq', title: '분리배출 순서대로', items: ['내용물 비우기', '헹구기', '라벨 떼기', '분리배출'], shuffle: true },
    proof: { type: 'photo', label: '분리배출 인증' },
    reward: { xp: 60, pts: 200, badge: 'b_eco' }, credit: 'jo' },
  { id: 'q21', photo: 'img/gal/16Mz4aV3_0.jpg', ch: 'c5', title: '마음 토닥토닥', sub: '오늘의 감정 날씨', fac: null, emoji: '🌤️',
    howTo: ['지금 내 마음과 가장 가까운 날씨 카드를 골라요', '짧은 응원 메시지를 받아요', '필요하면 청소년상담 1388에 연락해요'],
    tip: '어떤 감정이든 다 소중한 신호예요.',
    game: { type: 'emotion' },
    proof: { type: 'none' },
    reward: { xp: 40, pts: 100, badge: 'b_heart' }, credit: 'ryu' },
  { id: 'q22', photo: 'img/gal/96Ic9xJ4_0.jpg', ch: 'c5', title: '남세종 마스터', sub: '모든 퀘스트 완료 수료증', fac: null, emoji: '🏆', final: true,
    howTo: ['1~5장의 모든 퀘스트를 완료해요', '수료증을 발급받아요', '안내데스크에서 마스터 리워드를 받아요'],
    tip: '수료증에 이름이 들어가요.',
    game: null,
    proof: { type: 'none' },
    reward: { xp: 200, pts: 500, badge: 'b_master' }, credit: 'baek' },
];
/* 10월 스페셜 (누리다 실제 공지 기반 · 순서와 상관없이 도전) */
NSQ.CHAPTERS.push({ id: 'c6', title: '10·11월 스페셜', emoji: '🎃', desc: '지금 센터에서 열리는 진짜 행사 · 순서 없이 도전', credit: 'seo', event: true });
NSQ.QUESTS.splice(NSQ.QUESTS.length - 1, 0,
  { id: 'e01', until: '2026-10-17', ch: 'c6', event: true, title: '꿈빛페스타 나들이', sub: '10.17(금) 14:00 · 도담동 행정복지센터', fac: null, emoji: '🌸', photo: 'img/poster_festa.jpg', notice: 'n324',
    howTo: ['도담동 행정복지센터(보람로 77)로 가요', '스포츠스태킹은 현장에서 바로 참여!', '체험 사진을 인증해요'],
    tip: '디저트 베이킹·플라워 테라피·티셔츠 커스텀은 사전접수 마감, 현장접수 5명씩 예정이에요.',
    game: { type: 'quiz', items: [{ q: '꿈빛페스타에서 현장접수(상시)로 참여할 수 있는 체험은?', o: ['디저트 베이킹', '스포츠 스태킹', '플라워 테라피', '티셔츠 커스텀'], a: 1, why: '스포츠 스태킹은 현장접수(상시)! 나머지는 사전접수 25명 + 현장 5명이에요.' }] },
    proof: { type: 'photo', label: '페스타 체험 인증' }, reward: { xp: 80, pts: 300 }, credit: 'seo' },
  { id: 'e02', until: '2026-10-24', ch: 'c6', event: true, title: '미래환경에코뉴스 기자단', sub: '10.24(토) 14:00 · 소회의실 · 청소년수련활동인증', fac: 'meeting', emoji: '📰', photo: 'img/prog/p2090.jpg', prog: '2090',
    howTo: ['누리다에서 미래환경에코뉴스를 신청해요 (10.21 15시 마감)', '환경 퀴즈와 활동으로 환경을 알아봐요', '친구들과 네컷뉴스를 만들고 발표해요'],
    tip: '국가 인증 청소년수련활동(인증번호 제5661A09F-12560호)이라 활동 기록이 남아요.',
    game: { type: 'seq', title: '에코뉴스 제작 순서대로', items: ['환경 알아보기', '환경 퀴즈', '네컷뉴스 만들기', '뉴스 발표'], shuffle: true },
    proof: { type: 'photo', label: '네컷뉴스 인증' }, reward: { xp: 90, pts: 300, badge: 'b_eco' }, credit: 'hwang' },
  { id: 'e03', until: '2026-10-31', ch: 'c6', event: true, title: '해커톤 & 디지털 박람회', sub: '10.31(토) · 동아리실 · 다목적체육관', fac: 'gym', emoji: '🚀', photo: 'img/poster_hackathon.jpg', prog: '2100', notice: 'B000000008091Lb5zK8',
    howTo: ['10.31(토) 12:00~17:00 디지털 박람회장으로 가요 (해커톤 팀 신청은 10.20 마감)', 'XR 승마·디지털 클라이밍은 누리다 사전신청 또는 현장신청', '드론·자율주행·VR 스포츠·XR 승마 중 하나를 체험해요'],
    tip: '해커톤 팀은 10.24(토) 사전안내(10시/14시 중 1회) 필수 참석!',
    game: { type: 'match', pairs: [['드론', '비행 조종'], ['자율주행', '코딩 주행'], ['VR 스포츠', '가상 경기'], ['XR 승마', '확장현실']] },
    proof: { type: 'photo', label: '박람회 체험 인증' }, reward: { xp: 100, pts: 350, badge: 'b_maker' }, credit: 'ryu' },
  { id: 'e04', until: '2026-10-31', ch: 'c6', event: true, title: '유스데이 무대 응원', sub: '10.31(토) 16:00 · 2층 다목적 공연장', fac: 'hall', emoji: '🎤', photo: 'img/poster_youthday.jpg', notice: 'B000000008091Lb5zK8',
    howTo: ['10.31(토) 16시 2층 다목적 공연장으로 가요', '보컬·댄스·밴드·랩·마술 6팀의 무대를 관람해요', '공연 사진을 인증해요 (공연 참가 신청은 10.21 마감, 관람은 현장 입장)'],
    tip: '공연 참가팀은 1분 이내 공연 영상을 이메일로 제출해야 해요. 문의 044-300-4979',
    game: { type: 'rhythm', beats: 8, need: 6 }, proof: { type: 'photo', label: '공연 관람 인증' }, reward: { xp: 80, pts: 250, badge: 'b_stage' }, credit: 'baek' }
);

/* 10.24 업데이트: 새로 열린 실제 행사 퀘스트 */
NSQ.QUESTS.splice(NSQ.QUESTS.length - 1, 0,
  { id: 'e05', until: '2026-10-31', ch: 'c6', event: true, title: '세종 청소년 기네스 도전', sub: '10.31(토) 14:00~17:00 · 야외 광장 · 현장 접수', fac: null, emoji: '🏅', photo: 'img/prog/p2109.jpg', prog: '2109', notice: 'B000000008091Lb5zK8',
    howTo: ['10.31(토) 14시 센터 야외 광장으로 가요 (사전 신청 없이 현장 접수)', '뉴스포츠 3종목(마당골프·필러홀·필러체인지)에 도전해요', '내 최고 기록을 사진으로 인증해요'],
    tip: '2001~2017년생 세종시 청소년이면 누구나! 같은 날 14:30부터 마음치유 체험부스 20여 개도 열려요.',
    game: { type: 'shot', need: 3 }, proof: { type: 'photo', label: '기록 인증' }, reward: { xp: 90, pts: 300, badge: 'b_sport' }, credit: 'jo' },
  { id: 'e06', until: '2026-11-14', ch: 'c6', event: true, title: 'AI 윤리 탐구대', sub: '11.14(토) 13:00~16:30 · 청소년수련활동인증', fac: 'digital', emoji: '🤖', photo: 'img/prog/p2107.jpg', prog: '2107',
    howTo: ['누리다에서 「인공지능 시대의 청소년을 위한 AI 윤리」를 신청해요', '11.14(토) 13시 센터에서 AI 윤리 활동에 참여해요', '내가 만든 AI 사용 규칙을 사진으로 인증해요'],
    tip: '국가 인증 청소년수련활동이라 활동 기록이 남아요. 정원 20명 선착순!',
    game: { type: 'quiz', items: [
      { q: 'AI가 만든 그림이나 글을 과제에 쓸 때 가장 바른 행동은?', o: ['내가 직접 만든 것처럼 낸다', 'AI를 사용했다고 밝히고 출처를 적는다', '친구 이름으로 낸다', '아무 말 없이 고쳐서 낸다'], a: 1, why: 'AI 도움을 받았다면 솔직하게 밝히는 것이 AI 윤리의 첫걸음이에요.' },
      { q: '얼굴 사진을 AI 앱에 올리기 전에 꼭 확인할 것은?', o: ['필터가 예쁜지', '개인정보가 어떻게 쓰이는지', '배경 음악', '앱 아이콘 색'], a: 1, why: '내 얼굴도 소중한 개인정보예요. 어디에 저장되고 쓰이는지 먼저 확인해요.' }] },
    proof: { type: 'photo', label: '활동 인증' }, reward: { xp: 90, pts: 300, badge: 'b_maker' }, credit: 'hwang' }
);

NSQ.quest = id => NSQ.QUESTS.find(q => q.id === id);

NSQ.BADGES = [
  { id: 'b_welcome', name: '웰컴', emoji: '🙋', tier: 'common', desc: '첫 체크인 완료' },
  { id: 'b_idcard', name: '모바일 청소년증', emoji: '🪪', tier: 'common', desc: '프로필 사진 등록' },
  { id: 'b_book', name: '북러버', emoji: '📖', tier: 'common', desc: '북카페 인증' },
  { id: 'b_game', name: '게임 마스터', emoji: '🎮', tier: 'common', desc: '닌텐도 인증' },
  { id: 'b_sport', name: '스포츠 올스타', emoji: '🏀', tier: 'rare', desc: '체육관 인증' },
  { id: 'b_vocal', name: '보컬 스타', emoji: '🎤', tier: 'common', desc: '노래연습실 인증' },
  { id: 'b_dance', name: '댄스 루키', emoji: '💃', tier: 'rare', desc: '댄스연습실 인증' },
  { id: 'b_key', name: '재능개발 열쇠', emoji: '🔑', tier: 'rare', desc: '사전교육 신청' },
  { id: 'b_maker', name: '디지털 메이커', emoji: '💻', tier: 'epic', desc: '디지털 창작실 인증' },
  { id: 'b_beauty', name: '스타일 큐레이터', emoji: '💄', tier: 'rare', desc: '퍼스널 컬러 완료' },
  { id: 'b_band', name: '밴드 마에스트로', emoji: '🥁', tier: 'epic', desc: '악기연습실 인증' },
  { id: 'b_chef', name: '달콤한 셰프', emoji: '🧁', tier: 'epic', desc: '창의요리활동실 인증' },
  { id: 'b_climb', name: '클라이머', emoji: '🧗', tier: 'epic', desc: '클라이밍 완등' },
  { id: 'b_onair', name: '온에어 스타', emoji: '🎥', tier: 'rare', desc: '방송제작실 인증' },
  { id: 'b_stage', name: '무대 마스터', emoji: '🎭', tier: 'rare', desc: '공연장 인증' },
  { id: 'b_insta', name: '인스타 메이트', emoji: '📸', tier: 'common', desc: '인스타 팔로우' },
  { id: 'b_tube', name: '유튜브 메이트', emoji: '▶️', tier: 'common', desc: '유튜브 구독' },
  { id: 'b_eco', name: '에코 히어로', emoji: '🌱', tier: 'epic', desc: '플로깅 봉사' },
  { id: 'b_heart', name: '마음의 쉼표', emoji: '🌤️', tier: 'rare', desc: '감정 카드 완료' },
  { id: 'b_streak7', name: '개근 요정', emoji: '🔥', tier: 'epic', desc: '7일 연속 출석' },
  { id: 'b_master', name: '남세종 마스터', emoji: '🏆', tier: 'legendary', desc: '모든 퀘스트 완료' },
];
NSQ.TIERS = { common: { n: '일반', c: '#8B95A1', bonus: 20 }, rare: { n: '레어', c: '#3182F6', bonus: 40 }, epic: { n: '에픽', c: '#7C3AED', bonus: 80 }, legendary: { n: '전설', c: '#F59E0B', bonus: 200 } };
NSQ.badge = id => NSQ.BADGES.find(b => b.id === id);

/* 사전교육 회차 (실제 운영 시간) */
NSQ.EDU_SLOTS = ['14:30', '15:00', '15:30', '16:00', '16:30'];

/* 프로그램 (누리다 공지 기반 + 센터 프로그램실 유형) */
NSQ.PROGRAMS = [
  { id: 'p1', title: '재능개발공간 사전교육', cat: '사전교육', fac: 'digital', when: '매주 화~토 14:30~16:30 (5회차)', where: '디지털 창작실 → 뷰티룸 → 연습실 순회', target: '9~24세 청소년', fee: '무료', cap: 10, enrolled: 6, status: '상시',
    desc: '디지털 창작실·뷰티룸·개인/악기연습실을 쓰기 위한 필수 안전·장비 교육(30~40분). 이수 당일부터 예약 가능.',
    curriculum: [['안전 수칙', 10], ['장비 사용법 실습', 20], ['예약·노쇼 규정', 10]], link: 'spaces', questId: 'q09' },
  { id: 'p2', title: '제3회 청소년 디지털 포럼', cat: '행사', fac: 'hall', when: '2026.10 (공지 10.14)', where: '다목적 공연장', target: '세종시 청소년', fee: '무료', cap: 200, enrolled: 143, status: '모집중',
    desc: '청소년이 직접 디지털 시민성과 AI를 이야기하는 포럼. 누리다 공지사항에서 상세 일정을 확인하세요.',
    curriculum: [['개회·기조 발표', 30], ['청소년 세션', 60], ['토론·정리', 30]], link: 'nurida' },
  { id: 'p3', title: '2026 제7회 아름동 달빛축제', cat: '축제', fac: 'hall', when: '2026.10 (공지 10.13)', where: '센터 일원 · 아름동', target: '청소년·가족 누구나', fee: '무료', cap: 500, enrolled: 310, status: '모집중',
    desc: '아름동에서 열리는 가을 달빛축제. 청소년 동아리 버스킹과 체험 부스가 함께해요.',
    curriculum: [['체험 부스', 120], ['동아리 공연', 90], ['달빛 산책', 60]], link: 'nurida' },
  { id: 'p4', title: '청소년 글로벌 역량강화사업 파견대표단 3차 모집', cat: '모집', fac: 'meeting', when: '2026.10 (공지 10.12)', where: '중회의실 면접', target: '세종시 청소년', fee: '무료', cap: 20, enrolled: 14, status: '모집중',
    desc: '해외 파견 대표단 3차 모집. 지원서는 누리다에서 접수해요.',
    curriculum: [['서류 접수', 0], ['면접', 20], ['사전 워크숍', 120]], link: 'nurida' },
  { id: 'p5', title: '글로벌 선도기술 해커톤 & 디지털 박람회', cat: '디지털', fac: 'digital', when: '2026.10 (공지 10.08)', where: '디지털 창작실 · 공연장', target: '중·고등 청소년', fee: '무료', cap: 40, enrolled: 33, status: '마감임박',
    desc: '팀을 이뤄 24시간 동안 아이디어를 앱·서비스로 만드는 해커톤과 디지털 박람회.',
    curriculum: [['팀 빌딩', 60], ['개발 스프린트', 480], ['발표·시상', 90]], link: 'nurida', questId: 'q10' },
  { id: 'p6', title: '청소년 베이킹 원데이 클래스', cat: '요리', fac: 'cooking', when: '토 10:30~12:30', where: '창의요리활동실', target: '청소년 및 동반 가족', fee: '재료비 지원', cap: 24, enrolled: 19, status: '모집중',
    desc: '조리대 7개와 오븐을 갖춘 창의요리활동실에서 마들렌·쿠키를 굽고 포장해 가요.',
    curriculum: [['계량·위생', 20], ['반죽·성형', 40], ['굽기·포장', 60]], link: 'apply', questId: 'q14' },
  { id: 'p7', title: '스포츠클라이밍 아카데미', cat: '체육', fac: 'climbing', when: '토 16:00~18:00', where: '스포츠클라이밍장', target: '10~18세', fee: '무료(장비 대여)', cap: 12, enrolled: 11, status: '마감임박',
    desc: '기초 낙법·홀드 그립부터 볼더링 완등까지 단계별 코칭.',
    curriculum: [['안전·웜업', 20], ['그립·밸런스', 40], ['완등 실습', 60]], link: 'apply', questId: 'q15' },
  { id: 'p8', title: '숏폼·유튜브 영상제작 클래스', cat: '미디어', fac: 'studio', when: '수 17:00~19:00', where: '방송제작실', target: '중·고등 청소년', fee: '무료', cap: 10, enrolled: 7, status: '모집중',
    desc: '크로마키 앞 촬영, 핀마이크 수음, 컷편집과 자막까지 한 번에.',
    curriculum: [['카메라·조명', 30], ['촬영 실습', 50], ['편집', 40]], link: 'apply', questId: 'q16' },
  { id: 'p9', title: '밴드 동아리 리플레이 버스킹', cat: '동아리', fac: 'band', when: '금 18:00', where: '센터 앞 광장 · 악기연습실', target: '밴드 동아리', fee: '무료', cap: 30, enrolled: 22, status: '모집중',
    desc: '활동갤러리에도 올라온 센터 밴드 동아리의 정기 버스킹. 합주 연습은 악기연습실에서!',
    curriculum: [['리허설', 60], ['버스킹', 60]], link: 'nurida', questId: 'q13' },
  { id: 'p10', title: '에코 플로깅 봉사 (1365 인정)', cat: '봉사', fac: null, when: '토 10:00~12:00', where: '센터 정문 집결', target: '청소년 누구나', fee: '무료', cap: 30, enrolled: 18, status: '모집중',
    desc: '센터 주변 산책로 환경정화 후 분리배출. 1365 자원봉사시간 2시간 인정.',
    curriculum: [['장비 수령', 10], ['플로깅', 80], ['분리배출', 30]], link: 'apply', questId: 'q20' },
];

NSQ.NOTICES = [
  { id: 'n331', d: '2026.10.15', t: '[남세종종합청소년센터] 사춘기 청소년 보호자 대상 성교육', tag: '교육', mine: true,
    body: '남세종종합청소년센터에서 사춘기 청소년 보호자를 대상으로 하는 성교육을 안내합니다. 세부 일정과 신청 방법은 누리다 공지사항 원문에서 확인해 주세요.',
    url: 'https://www2.sejong.go.kr/youth/prog/bbsArticle/BBSMSTR_000000000231/view.do?nttId=B000000008075Sq1fN7' },
  { id: 'n330', d: '2026.10.14', t: '제3회 청소년 디지털 포럼 개최', tag: '행사', by: '청소년활동진흥센터' },
  { id: 'n329', d: '2026.10.13', t: '2026 제7회 아름동 달빛축제', tag: '축제', by: '청소년활동진흥센터' },
  { id: 'n328', d: '2026.10.12', t: '2026년 청소년 글로벌 역량강화사업 파견대표단 3차 모집', tag: '모집', by: '청소년활동진흥센터' },
  { id: 'n327', d: '2026.10.08', t: "글로벌 선도기술 '해커톤 활동 및 디지털 박람회'", tag: '디지털', mine: true, poster: 'img/poster_hackathon.jpg',
    body: "□ 글로벌 선도기술 해커톤 활동\n○ 운영일시: 2026. 10. 31.(토) 10:00~17:00\n○ 운영장소: 남세종종합청소년센터 동아리실\n○ 참가대상: 세종시 2008~2015년생 청소년(2~4인 팀 구성) / 초등·중등·고등 부문별 신청\n○ 모집기간: 2026. 10. 12.(월)~10. 20.(화)\n○ 신청방법: 누리다를 통한 신청(선착순) · 대표청소년 1명이 신청, 비고란에 팀 전원 이름+연락처 작성\n○ 주요내용: 지역사회 문제 발견 및 해결 아이디어 도출 → 팀별 기획회의 및 결과물 제작 → 결과물 발표 및 공유(부문별 수상)\n○ 사전안내: 10. 24.(토) 10시 / 14시 2회 진행(1회 필수 참석)\n\n□ 글로벌 선도기술 디지털 박람회 [현장신청]\n○ 운영일시: 2026. 10. 31.(토) 12:00~17:00\n○ 운영장소: 남세종종합청소년센터 다목적체육관\n○ 참가대상: 세종시 청소년 및 지역주민\n○ 활동내용: 드론, 자율주행, VR 스포츠, XR 승마 등",
    url: 'https://www2.sejong.go.kr/youth/prog/bbsArticle/BBSMSTR_000000000231/view.do?nttId=B000000008066Ba9qE9', prog: '2088' },
  { id: 'n326', d: '2026.10.07', t: '2026 유스데이 청소년 공연 참가자 모집', tag: '모집', mine: true, poster: 'img/poster_youthday.jpg',
    body: "남세종종합청소년센터에서는 청소년들이 자신의 재능과 끼를 발휘할 수 있도록 「2026 유스데이 청소년 공연」을 운영합니다.\n○ 모집기간: 2026. 10. 9.(금) ~ 10. 21.(수)\n○ 모집대상: 세종시 청소년을 포함한 6팀(팀 또는 개인)\n○ 모집분야: 보컬, 댄스, 밴드, 랩, 마술 등 청소년 공연예술\n○ 공연일시: 2026. 10. 31.(토) 16:00~17:00 (리허설 15:00~16:00)\n○ 공연장소: 남세종종합청소년센터 2층 다목적 공연장\n○ 신청방법: 포스터 QR코드 신청 · 선착순 6팀 · 1분 이내 공연 영상 이메일 제출 필수\n○ 기타: 드럼, 전자키보드, 마이크 사용 가능\n○ 문의: 044-300-4979",
    url: 'https://www2.sejong.go.kr/youth/prog/bbsArticle/BBSMSTR_000000000231/view.do?nttId=B000000008064Wu7vO4' },
  { id: 'n325', d: '2026.10.07', t: '제1회 세종시청소년댄스경연대회 안내', tag: '행사', by: '청소년활동진흥센터' },
  { id: 'n324', d: '2026.10.01', t: '남세종종합청소년센터 꿈빛페스타 안내', tag: '축제', mine: true, poster: 'img/poster_festa.jpg',
    body: "남세종종합청소년센터와 도담동 행정복지센터가 함께 준비한 '꿈빛페스타'!\n○ 운영일시: 2026. 10. 17.(금) 14:00~16:00\n○ 운영장소: 도담동 행정복지센터(보람로 77, 도담동)\n○ 운영내용: 스포츠스태킹, 디저트 베이킹, 플라워 테라피, 티셔츠 커스텀 등\n - 디저트 베이킹 · 플라워 테라피 · 티셔츠 커스텀: 사전접수 25명 + 현장접수 5명\n - 스포츠 스태킹: 현장접수(상시)\n※ 운영 상황에 따라 일정 및 내용이 변경될 수 있습니다.",
    url: 'https://www2.sejong.go.kr/youth/prog/bbsArticle/BBSMSTR_000000000231/view.do?nttId=B000000008057Kh3lC5' },
  { id: 'n322', d: '2026.09.28', t: '2026 도담동 마을방송국 운영단 모집', tag: '모집', by: '청소년활동진흥센터' },
];


/* 혜택 (포인트로 교환) */
NSQ.SHOP = [
  { id: 's1', name: '북카페 음료 교환권', emoji: '🥤', cost: 300, cat: '쿠폰', desc: '북카페에서 음료 1잔', where: '1층 안내데스크' },
  { id: 's2', name: '간식 스낵팩', emoji: '🍪', cost: 400, cat: '쿠폰', desc: '에너지 스낵 세트', where: '1층 안내데스크' },
  { id: 's3', name: '3D 프린터 출력권 (50g)', emoji: '🖨️', cost: 600, cat: '쿠폰', desc: '디지털 창작실 출력 재료권', where: '디지털 창작실' },
  { id: 's4', name: '남세종 시그니처 텀블러', emoji: '🧋', cost: 900, cat: '굿즈', desc: '친환경 보온 텀블러', where: '1층 안내데스크' },
  { id: 's5', name: '남세종 에코백', emoji: '👜', cost: 800, cat: '굿즈', desc: '한정판 캔버스 에코백', where: '1층 안내데스크' },
  { id: 's6', name: '문화상품권 5,000원', emoji: '🎫', cost: 1500, cat: '상품권', desc: '서점·영화관 사용', where: '1층 안내데스크' },
];

/* 동아리 길드 (실제 활동갤러리 명칭 반영) */
NSQ.GUILDS = [
  { id: 'g_replay', name: '리플레이', emoji: '🎸', cat: '밴드 동아리', where: '악기연습실', photo: 'img/gal/87Tl8gH1_0.jpg', post: 'B000000007987Tl8gH1',
    desc: '북세종 가을 버스킹 등 다양한 무대에 서는 남세종 대표 청소년 밴드.' },
  { id: 'g_unit', name: '유닛', emoji: '🥁', cat: '밴드 동아리 (2026 신생)', where: '악기연습실', photo: 'img/gal/17Vq7vF6_0.jpg', post: 'B000000007917Vq7vF6',
    desc: '2026년 처음 활동을 시작한 신생 밴드. 여름방학 역량강화 교육으로 합주를 맞춰가는 중!' },
  { id: 'g_jjj', name: 'JJJ', emoji: '🎤', cat: '청소년 밴드', where: '다목적 공연장', photo: 'img/gal/37Qn2uG8_0.jpg', post: 'B000000007737Qn2uG8',
    desc: '청소년의 날 기념식 & 유스데이 무대를 장식한 청소년 밴드.' },
  { id: 'g_sejogak', name: '세조각', emoji: '🧩', cat: '봉사동아리', where: '동아리실', photo: 'img/gal/21Gi7eO7_0.jpg', post: 'B000000008021Gi7eO7',
    desc: '시민 투표로 봉사 주제를 정하고, 폐플라스틱 망원경 만들기 같은 기획활동을 운영해요.' },
  { id: 'g_sechorom', name: '세초롬', emoji: '🌱', cat: '환경기획단', where: '창의요리활동실 · 야외', photo: 'img/gal/20Pb5oA4_0.jpg', post: 'B000000008020Pb5oA4',
    desc: 'Green Meal로 먹거리와 수확의 의미를 배우고 모종을 직접 심는 환경기획단.' },
  { id: 'g_greenmove', name: '그린무브', emoji: '♻️', cat: '환경 동아리', where: '센터 광장', photo: 'img/gal/39Ha3vQ2_0.jpg', post: 'B000000007739Ha3vQ2',
    desc: '폐플라스틱 병뚜껑 키링 등 자원순환 체험부스를 운영해요.' },
  { id: 'g_meari', name: '메아리', emoji: '📣', cat: '청소년운영위원회 (6기)', where: '중회의실', photo: 'img/gal/33Nd0fI8_0.jpg', post: 'B000000007933Nd0fI8',
    desc: '180여 명의 의견을 모아 기관장 간담회에서 센터 발전방향을 제안. 독립운동가 UCC대회 최우수상!' },
  { id: 'g_history', name: '세종 히스토리', emoji: '📜', cat: '나라사랑 프로젝트', where: '동아리실', photo: 'img/gal/47Gs9bQ7_0.jpg', post: 'B000000007747Gs9bQ7',
    desc: '참전유공자 인터뷰 전시 「청소년 영웅의 꿈을 만나다」를 직접 기획한 역사 동아리.' },
];

NSQ.LEADERS = [
  { n: '세종호수러너', a: '🏃', xp: 1240, s: 18 }, { n: '아름동_클라이머', a: '🧗', xp: 1105, s: 12 },
  { n: '메이커_스티브', a: '⚙️', xp: 980, s: 9 }, { n: '도예마스터_린', a: '🏺', xp: 870, s: 7 },
  { n: '닌텐도달인', a: '🎮', xp: 640, s: 5 }, { n: '오븐마스터', a: '🥐', xp: 520, s: 4 },
  { n: '댄스천재', a: '💃', xp: 410, s: 3 }, { n: '보람동책벌레', a: '🦉', xp: 300, s: 2 },
];

NSQ.AVATARS = ['🦁', '🐯', '🐻', '🐰', '🦊', '🐼', '🐨', '🐸', '🦄', '🐙', '🦋', '🐧'];
NSQ.LEVELS = [[0, '새싹 청소년'], [150, '탐험 루키'], [400, '남세종 탐험가'], [800, '열정 모험가'], [1300, '센터 마스터'], [2000, '남세종 레전드']];

/* 언론 속 남세종 (웹 검색으로 확인한 실제 보도) */
NSQ.PRESS = [
  { d: '2026.10', o: '세종시민일보', t: '충청권 5개 청소년시설, 안전·환경 손잡았다', s: '대전청소년위캔센터·유성구청소년수련관·청주시청소년수련관·천안시청소년복합커뮤니티센터 등과 시설 안전·이용환경 모니터링, 우수사례 공유 협약(10.8).', u: 'https://www.sejongyeonhap.co.kr/news/articleView.html?idxno=58000' },
  { d: '2026.10', o: '웹이코노미', t: '남세종종합청소년센터, 청소년 안심 공간 조성 위해 충청권 5개 시설과 협약', s: '안전·친환경·유지관리 정보를 공유하고 직원 역량 강화 교류도 확대.', u: 'https://www.webeconomy.co.kr/news/articleView.html?idxno=2329545' },
  { d: '2026.09.20', o: '충청도민일보', t: "남세종종합청소년센터, 청소년·주민 함께한 '달빛 한가위'", s: '달빛별당·달빛마당·달빛한상 3개 공간, 11개 체험 부스를 청소년운영위원회 등 자치기구가 직접 기획·운영.', u: 'https://www.dominilbo.com/news/articleView.html?idxno=278616' },
  { d: '2026.09.18', o: '네이트 뉴스', t: "'정 나누며 세대 소통'…세종 청소년·주민 '달빛 한가위' 성료", s: '투호·윷놀이·떡메치기·인절미 만들기·세계 음식 체험과 제기차기 특별경기.', u: 'https://m.news.nate.com/view/20260918n28947' },
  { d: '2026.07.13', o: '세종시민일보', t: "청소년이 직접 만드는 배움의 장 '꿈빛제' 성료", s: '정규강좌 4개월 성과 공유: 영어연극 「오즈의 마법사」, 한국창작무용, 재능나눔 체험, 배드민턴 친선경기.', u: 'https://www.sejongyeonhap.co.kr/news/articleView.html?idxno=55716' },
  { d: '2026.05.31', o: '네이트 뉴스', t: '세종시 청소년의 날, 미래를 여는 청소년의 힘', s: '제2회 세종시 청소년의 날 기념식을 남세종종합청소년센터에서 개최.', u: 'https://m.news.nate.com/view/20260531n03953' },
  { d: '2026.05', o: '에프뉴스', t: "남세종종합청소년센터 '청소년이 주인공' 청소년의 달 5월 프로그램 풍성", s: 'VR/XR 승마체험, 그래비트랙스 액션트랙플레이, 자율주행·앱 개발, 달빛 디지털 안심소.', u: 'https://www.fnewstv.com/news/newsview.php?ncode=1065568825173675' },
  { d: '2026.05.01', o: '일간투데이', t: '남세종종합청소년센터, 청소년 미래역량 강화 협약', s: '㈜엘콤XR과 XR·피지컬 AI 기반 청소년활동 프로그램 협력(4.29).', u: 'https://www.dtoday.co.kr/news/articleView.html?idxno=768128' },
  { d: '2026.01.13', o: '브릿지경제', t: "남세종종합청소년센터 청소년수련시설, '최우수' 선정", s: '성평등가족부 종합평가 청소년수련관 부문, 전국 206곳 중 20곳 최우수.', u: 'https://www.viva100.com/article/20260113500274' },
  { d: '2026.01.13', o: '중부시사신문', t: "세종시 남세종종합청소년센터 청소년수련시설 '최우수' 선정", s: '환경·문화·미래기술 활동과 학교·유관기관 협력이 높은 평가.', u: 'https://www.gninews.co.kr/news/article.html?no=764284' },
  { d: '2026.01', o: '충북일보', t: "남세종종합청소년센터 '최우수' 선정", s: '개관 5주년을 맞아 세종시 청소년의 균형 성장 지원 계획.', u: 'https://www.inews365.com/news/article.html?no=902521' },
  { d: '2025.08.11', o: '네이트 뉴스', t: "세종시, 청소년 자치기구 교류 행사 '피버데이' 성료", s: '남세종·고운·보람 3개 시설 자치기구 청소년 60명, 단체줄넘기·서바이벌.', u: 'https://news.nate.com/view/20250811n00732' },
  { d: '2025.08', o: '대전프레스', t: '세계 청소년의 날, 남세종종합청소년센터에서 역량 키운다', s: '13개 역량강화 부스, 인권영화 「우리들」 상영, 디지털 리터러시 토론.', u: 'https://www.daejeonpress.co.kr/news/65398' },
  { d: '2021.01.13', o: '세종의소리', t: '"청소년에게 날개를~" 남세종종합청소년센터 13일 개관', s: '지상 3층·지하 1층, 연면적 5,780.43㎡. 운영 주제 "세종 청소년의 미래, 행복을 디자인하다".', u: 'https://www.sjsori.com/news/articleView.html?idxno=48100' },
  { d: '2021.01.13', o: '세종포스트', t: "청소년의 꿈, '남세종종합청소년센터'에서 펼쳐라!", s: '다목적강당·체육관·방송콘텐츠제작실·요리실·메이커스페이스, 10개 영역 프로그램.', u: 'http://www.sjpost.co.kr/news/articleView.html?idxno=55778' },
];
NSQ.CENTER.history.splice(NSQ.CENTER.history.length - 1, 0, ['2026.10.08', '충청권 5개 청소년수련시설과 안전·환경 협력 업무협약']);
/* 시설별 연관 키워드 (프로그램 장소·제목 / 활동 사진 매칭) */
NSQ.FAC_KEYS = { bookcafe: ['북카페', '바리스타', '보드게임'], nintendo: ['닌텐도', 'e스포츠', '게임'], gym: ['체육관', '배드민턴', '농구', '뉴스포츠', '피구', '스태킹'],
  dance: ['댄스', '무용'], karaoke: ['노래', '보컬'], digital: ['디지털창작', '코딩', '디지털', 'AI', '3D'], beauty: ['뷰티', '네일', '퍼스널', '메이크업'],
  vocal: ['보컬', '개인연습실'], band: ['밴드', '악기', '버스킹', '리플레이', '유닛'], cooking: ['요리', '베이킹', '쿠킹', '쇼콜라', '떡', '제빵', '음식'],
  climbing: ['클라이밍'], hall: ['공연장', '공연', '유스데이', '연극'], studio: ['방송', '영상', '미디어', '크로마키'], meeting: ['회의실', '운영위원회', '포럼', '간담회'] };

/* 학생별 아이디어 → 앱 속 반영 위치 (💡 이름을 누르면 보여요) */
NSQ.CREDIT_MAP = {
  ryu: { emoji: '🗺️', color: '#3182F6', proto: '청소년센터 3D 퀘스트 월드', items: [
    ['🗺️', '층별 센터 맵', '1F~3F 시설을 층별로 보고 퀘스트 있는 방은 파랗게 표시', 'facmap', ''],
    ['🎮', '시설별 미니게임 9종', '리듬 탭·슛 게이지·음정 튜닝·롱톤·드럼 순서·조명 콘솔·DJ·퍼스널 컬러·감정 카드', 'quest', 'q06'],
    ['🏢', '시설 상세 시트', '공간마다 장비·규칙·연결 퀘스트를 한 장에', 'facility', 'climbing'] ] },
  kim: { emoji: '🗓️', color: '#1BB56A', proto: '남세종 QUEST 스마트 예약 시스템', items: [
    ['🕐', '시간대 예약 · 빈자리 알림', '회색 시간을 누르면 빈자리 알림 신청', 'rsegGo', 'talent'],
    ['📲', 'QR 체크인 · 10분 룰', '예약 시작 10분 안에 체크인하는 스마트 티켓', 'rsegGo', 'mine'],
    ['🧾', '포인트 장부', '적립·사용 내역과 잔액을 한 줄씩', 'ledger', ''],
    ['📘', '활동 여권', '완료한 퀘스트와 이용 시간 기록', 'passport', ''] ] },
  han: { emoji: '🧭', color: '#FF8A00', proto: '듀오링고 스타일 남세종 Quest', items: [
    ['🧭', '퀘스트 로드', '한 단계씩 열리는 퀘스트와 별점', 'go', 'quest'],
    ['✅', '퀴즈 해설 시트', '정답 확인 후 초록/빨강 해설이 아래에서 올라와요', 'quest', 'q02'],
    ['🧩', '단어 퍼즐 · 짝맞추기', '북카페 매너 문장 조립, 시설-준비물 짝맞추기', 'quest', 'q04'],
    ['🏆', '주간 리그 랭킹', '포디움과 "몇 XP 더 모으면 탈환"', 'benefitSeg', 'rank'],
    ['📸', '활동 사진 피드', '인스타처럼 넘겨보고 응원하는 센터 소식', 'newsSeg', 'photo'] ] },
  jo: { emoji: '🔥', color: '#F04452', proto: '유스퀘스트 청소년센터', items: [
    ['🔥', '출석 스트릭', '7일 연속 출석 보상 사다리', 'checkin', ''],
    ['🤝', '동아리 길드', '실제 남세종 동아리·자치기구에 함께하기', 'guilds', ''],
    ['🏅', '배지 희귀도', '일반·레어·에픽·전설 등급 배지 컬렉션', 'benefitSeg', 'badge'],
    ['💚', '마음쉼터', '감정 날씨와 청소년전화 1388', 'care', ''],
    ['📋', '모집 중 프로그램 카드', '정원 막대와 마감 임박 표시', 'rsegGo', 'program'] ] },
  hwang: { emoji: '🪪', color: '#7C3AED', proto: '남세종 퀘스트 (청소년증·인증)', items: [
    ['🪪', '모바일 청소년증', '사진 등록과 매일 바뀌는 QR 카드', 'idcard', ''],
    ['📷', '사진 · SNS · QR 인증', '현장 인증 체크리스트와 스캔 화면', 'quest', 'q03'],
    ['🔑', '자율이용 / 재능개발 구분 예약', '현장접수와 사전교육 후 예약을 나눠서', 'rsegGo', 'free'],
    ['📅', '프로그램 캘린더', '날짜를 누르면 그날 시작하는 실제 프로그램', 'rsegGo', 'cal'] ] },
  seo: { emoji: '🎯', color: '#00A3BF', proto: '남세종 미션 투어', items: [
    ['🎯', '오늘의 미션', '날짜마다 바뀌는 3개 미션과 자정 리셋 카운트다운', 'go', 'home'],
    ['📝', '미션 방법 단계 · 팁', '퀘스트마다 1-2-3 방법과 꿀팁', 'quest', 'q01'],
    ['💮', '스탬프 쾅!', '완료하면 내 이름이 찍힌 도장과 스탬프 카드', 'benefitSeg', 'badge'],
    ['🎟️', '교환권 직원 확인', '안내데스크에서 직원이 확인해야 사용 완료', 'benefitSeg', 'wallet'],
    ['🎃', '10·11월 스페셜 퀘스트', '실제 센터 행사 일정으로 만든 퀘스트', 'quest', 'e05'] ] },
  go: { emoji: '🧩', color: '#D6336C', proto: '친구들 기획안 엮어 다듬기', note: '고재혁 친구는 다른 친구들의 기획안에서 하나씩 골라 함께 다듬었어요.', items: [
    ['📅', '프로그램 캘린더', '황시윤 친구 기획과 함께 · 날짜별 실제 프로그램', 'rsegGo', 'cal'],
    ['🧾', '포인트 장부', '김건우 친구 기획과 함께 · 적립·사용 내역과 잔액', 'ledger', ''],
    ['🗺️', '층별 센터 맵', '류영진 친구 기획과 함께 · 1F~3F 시설 위치', 'facmap', ''],
    ['📸', '활동 사진 피드', '한은진 친구 기획과 함께 · 센터 소식을 사진으로', 'newsSeg', 'photo'],
    ['💚', '마음쉼터', '조유빈 친구 기획과 함께 · 감정 날씨와 1388', 'care', ''] ] },
  baek: { emoji: '💎', color: '#0FA968', proto: '남세종 QUEST (수업 예약 · 보상)', items: [
    ['📑', '커리큘럼 · 프로그램 상세', '포스터, 정원, 상세 안내를 한 화면에', 'program', '2090'],
    ['🎁', '완료 → 보상 받기 2단계', '퀘스트를 끝내면 주황 "보상 받기" 버튼', 'go', 'quest'],
    ['🛍️', '포인트 교환소', '부족한 포인트와 교환 후 잔액을 미리', 'benefitSeg', 'shop'],
    ['🎓', '남세종 마스터 수료증', '모든 퀘스트를 마치면 내 이름이 들어간 수료증', 'quest', 'q22'] ] },
};
