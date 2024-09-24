/* 컴포넌트들의 핵심 데이터 모음 */

// 이미지 가져오기
import port01 from '../assets/img/port01.png';
import port02 from '../assets/img/port02.png';
import port03 from '../assets/img/port03.png';
import port04 from '../assets/img/port04.png';

// 데이터화 (유지보수,재활용성)
export const headerNav = [
  {
    title: 'intro',
    url: '#intro',
  },
  {
    title: 'skill',
    url: '#skill',
  },
  {
    title: 'site',
    url: '#site',
  },
  {
    title: 'portfolio',
    url: '#port',
  },
  {
    title: 'contact',
    url: '#contact',
  },
];

// 핵심 데이터 작업 / 부품화
export const introText = {
  title: 'port developer',
  desc: ['talent is', 'found at the end of the', 'effort'],
};

// 데이터화 (유지보수,재활용성)
export const skillText = [
  {
    title: '꿈을 설계하고 디자인하다.',
    desc: '나는 공간을 만드는 것을 좋아한다. 어려을 때부터 나만의 공간을 만드는 것을 좋아했고 나만의 다락방을 좋아했다. 단 한 사람이라도 내가 만든 공간 속에서 영감을 받거나 마음이 움직였으면 좋겠다. 나만의 공간을 마음것 만들 수 있다는 건 코딩에 엄청난 매력인거 같다. 그 한구석에 나만의 꿈을 설계하고, 개발을 하며 앞으로도 살고 싶다.',
  },
  {
    title: '열심히 할수록 기회는 따른다.',
    desc: '운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.',
  },
  {
    title: '나에게 정직하다.',
    desc: '정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.',
  },
];

// 핵심 데이터 작업 / 부품화
export const siteText = [
  {
    text: ['make', 'site compliant with', 'webstandard'],
    title: '비트를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-vite',
    view: 'https://port2023-vite.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, CSS Variable, Vite',
    ],
  },
  {
    text: ['make', 'site compliant with', 'react.js'],
    title: '리액트를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-react',
    view: 'https://port2023-react.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, CSS Variable, Vite',
    ],
  },
  {
    text: ['make', 'site compliant with', 'vue.js'],
    title: '뷰를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-vue',
    view: 'https://port2023-vue.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, Scss Variable, vue',
    ],
  },
  {
    text: ['make', 'site compliant with', 'next.js'],
    title: '넥스트를 이용한 사이트 제작',
    code: 'https://github.com/webstoryboy/port2023-next',
    view: 'https://port2023-next.netlify.app',
    info: [
      'site coding',
      'production period : two days',
      'use stack : HTML5/CSS3, Scss Variable, next.js',
    ],
  },
];

// 데이터화 (유지보수,재활용성)
export const portText = [
  {
    num: '01',
    title: '어워드에도 올라간 포트폴리오',
    desc: '라마 디자인을 통해 자신의 스킬을 가장 멋지게 표현한 포트폴리오입니다. 가로 모드와 세로 모드는 매우 인상적이며 특히 리액트와 비트를 이용하여 제작한 것은 더욱 놀랍습니다. 이 사이트는 awwwards.com에도 인정받아 올라간 포트폴리오입니다. 확실히 그의 뛰어난 디자인 스킬과 기술력이 빛을 발휘한 결과물인 것 같습니다.',
    img: port01,
    code: 'https://github.com/kimsangjunv1/-React-Portfolio',
    view: 'https://portfoliosj-react.netlify.app',
    name: '김상* 님의 포트폴리오',
  },
  {
    num: '02',
    title: '빛나는 밤에 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ',
    img: port02,
    code: 'https://github.com/seolhee313/PORTFOLIO-REACT',
    view: 'https://portfolio-313.web.app/',
    name: '천설* 님의 포트폴리오',
  },
  {
    num: '03',
    title: '열정이 넘치는 포트폴리오',
    desc: '이 사이트는 정말 인상적인 포트폴리오입니다. 특히 스무스한 효과와 가로 모드드 높은 퀄리티를 자랑합니다. 디테일과 꼼꼼함이 넘치는 포트폴리오는 개발자의 뛰어난 능력을 엿볼 수 있습니다. GSAP와 React.js를 이용하여 사이트를 표현한 것은 기술적인 능력과 창의성을 강조하는데, 부족함이 없으며, 세심한 코딩과 디테일한 작업으로 그의 개발 감각과 능력이 빛을 발휘한 것 같습니다. ',
    img: port03,
    code: 'https://github.com/seolhee313/PORTFOLIO-REACT',
    view: 'https://portfolio-313.web.app/',
    name: '천설* 님의 포트폴리오',
  },
  {
    num: '04',
    title: '모던한 포트폴리오',
    desc: '블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.',
    img: port04,
    code: 'https://github.com/dlgnsrb227/portfolio-next',
    view: 'https://hoongportfolio-next.netlify.app/',
    name: '이훈* 님의 포트폴리오',
  },
];

// 핵심 데이터 작업 / 부품화
export const contactText = [
  {
    link: 'https://open.kakao.com/o/sCIpVY4f',
    title: 'KAKAO : kim seong su',
  },
  {
    link: 'mailto:know.warehouse02@gmail.com',
    title: 'know.warehouse02@gmail.com',
  },
];

// 데이터화 (유지보수,재활용성)
export const footerText = [
  {
    title: 'youtube',
    desc: '유튜브에 오시면 더 많은 강의를 볼 수 있습니다.',
    link: 'https://www.youtube.com/@Webstoryboy',
  },
  {
    title: 'github',
    desc: '깃헙에 오시면 더 많은 소스를 볼 수 있습니다.',
    link: 'https://github.com/webstoryboy',
  },
  {
    title: 'blog',
    desc: '블러그에 오시면 더 많은 정보를 볼 수 있습니다.',
    link: 'https://webstoryboy.co.kr',
  },
  {
    title: 'gsap',
    desc: 'GSAP에 오시면 더 많은 강의를 볼 수 있습니다.',
    link: 'https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq',
  },
  {
    title: 'react',
    desc: '리액트로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-react',
  },
  {
    title: 'vue',
    desc: '뷰로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-vue',
  },
  {
    title: 'next',
    desc: '넥스트로 만든 사이트를 같이 만들어 봅니다.',
    link: 'https://github.com/webstoryboy/port2023-next',
  },
];
