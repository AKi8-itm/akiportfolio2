import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AkiraFujikawa-portfolio', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'ようこそ！藤川あきらのポートフォリオサイトへ!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'はじめまして。私は、',
  name: '藤川　了（あきら）です。',
  subtitle: '大阪教育大学の学生で、NPO法人ふらいおんの創立者です。".',
  cta: 'もっと知る',
};

// ABOUT DATA
export const aboutData = {
  img: '18563.jpg',
  paragraphOne: '2017年、私は浪人生でした。当初は、現役時代に志望していた大学に入るため、毎日を過ごしていたのですが、浪人生として半年が過ぎたころ、「若い時の時間の価値」について考えるようになりました。そして、「人生80年以上が当たり前になっても、身体的にも・精神的にも若い時にしか経験できないことがあり、その価値は非常に高い」という考えを持ちました。そこで、「インターネットでは知ることができない世界中のローカルな出来事を自分自身の足で回って体感したい」と想い、大学生の間に1年間ほどバックパックでの世界一周旅行をすることに決めました。世界一周旅行のために必要な能力を身に付け、準備をする必要性があると考え、「語学力の向上・消極的な自分の行動やマインドを積極的にする・世界一周旅行資金の確保」の3点を大学生活での重点実施項目と定めました。上記の3点を実施するためには、多くの時間が必要です。普通の大学生では実施できないと考え、昼間に仕事や勉強ができる時間が確保できて、なおかつ海外への語学留学ができる大学を探したところ、現在通っている大阪教育大学の夜間5年コースを見つけ、進学することにしました。',
  paragraphTwo: '大学に入学後、オーストラリアのクイーンズランド大学へ語学留学し、IELTS6.0を取得・昼間に大阪市内の小学校で嘱託職員として働きながら資金を確保・平成30年7月豪雨災害やラグビーW杯など積極的にボランティア活動を行う、など重点実行項目を着実に行い、自分に足りていなかった能力を身に付けました。そして、大学2年生の夏、2020年に世界一周旅行を実行することを決断し、準備を本格化させました。ですが、新型コロナウイルスの影響で世界一周旅行は断念することになりました。けれども、それまでの2年間を無駄にはしたく無く、「コロナ禍でもできる色々な経験をしたい」という想いから、2020年の間に輸入販売ビジネスや株式投資を始め、年末からは大学の友人たちを誘ってNPO法人を立ち上げ、活動を始めました。現在は、そのNPO法人の代表として、20名ほどの大学生や高校生と共に、3つの事業を行っています。',
  paragraphThree: '上記のように、私には計画力とその計画の実行力、行動力があります。現在は、労働環境が劣悪な教職の道に進むのをためらっており、将来の選択肢を増やすために就職活動を始めています。色々なキャリアについて教えていただけたら嬉しいので、もしよろしければ、私までご連絡ください。以上です。ここまで読んでいただき、ありがとうございました。',
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
