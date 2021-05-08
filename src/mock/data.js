import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AKIRAFUJIKAWAportfolio', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'ようこそあきらのポートフォリオサイトへ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'こんにちは。私の名前は',
  name: '藤川　了です。',
  subtitle: '大阪教育大学の大学生兼NPO法人ふらいおんの創設者（代表）です。',
  cta: 'もっと知る',
};

// ABOUT DATA
export const aboutData = {
  img: '18563.jpg',
  paragraphOne: '私は、大学生活中に世界一周旅行をするために、5年制の大阪教育大学初等教育教員養成課程小学校夜間5年コースに入学しました。',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'もし、私にご興味がございましたらこちらからご連絡ください。',
  btn: 'メールアドレス',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
