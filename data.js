import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AkiraFujikawa-portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfoliosite!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello,My name is',
  name: 'Akira Fujikawa',
  subtitle: 'I am a student at OsakaKyoikuUniv and the founder of the NPO "FLYON".',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: '18563.jpg',
  paragraphOne: 'In 2018,I entered Osaka University of Education, a five-year course for Elementary School Teacher（Evening course）, to travel around the world during my university life.',
  paragraphTwo: 'I planned to improve my abilities for the goal of traveling around the world in 2020. In 2018, I went to the University of Queensland in Australia for a short study abroad program to improve my English skills. In 2019, we did several jobs to earn travel funds and used social media to gather local information around the world.',
  paragraphThree: 'In 2020, due to covid-19, I gave up round-the-world travel during my university life and changed my plans to travel around the world in the late 2020s. Therefore, I wanted to gain valuable experience with my university friends for the rest of my university life, so I established an NPO that runs a cram school in order to do business that makes use of my specialty of "education".',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Features',
    info: 'When I have to do something, I make a quick decision and act immediately. Even if you fail, immediately think about the cause and try again. I have been playing football for over 10 years since I was in elementary school, so I am physically tough and have a strong mentality.',
    info2: 'I get bored with things faster than the average person, and interest sometimes shifts. I think about myself first, except for my deeply involved friends, teammates, and the people I have been indebted to. I do not like self-sacrifice.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Ability',
    info: 'My best ability is the ability to find information that can obtain a lot of information from various sources by making use of the English equivalent of IELTS 6.0, and the ability to acquire useful information by connecting fragmentary information on SNS and the Internet with information from books and mass media with certainty.For example, I have no programming experience, but I was able to create this static site using Gatsby by its ability to gather information.',
    info2: 'I have been working part-time in elementary school for more than 3 years. So, I am good at interacting with children and teaching them things in an easy-to-understand way. In early 2023, I will get The licence of elementary school teacher.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'NPO "FLYON"',
    info: 'Taking advantage of my knowledge of the field of education that I am good at, I run free cram schools and non-profit programming schools to correct educational disparities.',
    info2: 'We do not get much money from our children, so we work with more than 20 members to create web apps, podcasts, grants from national and local governments, and raise donations from sponsors.',
    url: 'https://flyon.jp',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you want to contact me, please send me an email.',
  btn: 'mail adress',
  email: 'n181330@ex.osaka-kyoiku',
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
