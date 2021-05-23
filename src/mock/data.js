import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '藤川あきらのポートフォリオサイト', // e.g: 'Name | Developer'
  lang: 'ja', // e.g: en, es, fr, jp
  description: 'ようこそ！藤川あきらのポートフォリオサイトへ!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'はじめまして。私は、',
  name: '藤川　了（ふじかわ　あきら：Akira Fujikawa）',
  subtitle: 'です。大阪教育大学の学生で、NPO法人ふらいおんの創立者です。',
  cta: 'もっと知る',
};

// ABOUT DATA
export const aboutData = {
  img: '18563.jpg',
  paragraphOne: '2017年、私は浪人生でした。当初は、現役時代に志望していた大学に入るため、毎日を過ごしていたのですが、浪人生として半年が過ぎたころ、「若い時の時間の価値」について考えるようになりました。そして、「人生80年以上が当たり前になっても、身体的にも・精神的にも若い時にしか経験できないことがあり、その価値は非常に高い」という考えを持ちました。そこで、「インターネットでは知ることができない世界中のローカルな出来事を自分自身の足で回って体感したい」と想い、大学生の間に1年間ほどバックパックでの世界一周旅行をすることに決めました。世界一周旅行のために必要な能力を身に付け、準備をする必要性があると考え、「語学力の向上・消極的な自分の行動やマインドを積極的にする・世界一周旅行資金の確保」の3点を大学生活での重点実施項目と定めました。上記の3点を実施するためには、多くの時間が必要です。普通の大学生では実施できないと考え、昼間に仕事や勉強ができる時間が確保できて、なおかつ海外への語学留学ができる大学を探したところ、現在通っている大阪教育大学の夜間5年コースを見つけ、進学することにしました。',
  paragraphTwo: '大学に入学後、オーストラリアのクイーンズランド大学へ語学留学し、IELTS6.0を取得・昼間に大阪市内の小学校で嘱託職員として働きながら資金を確保・平成30年7月豪雨災害やラグビーW杯など積極的にボランティア活動を行う、など重点実行項目を着実に行い、自分に足りていなかった能力を身に付けました。そして、大学2年生の夏、2020年に世界一周旅行を実行することを決断し、準備を本格化させました。ですが、新型コロナウイルスの影響で世界一周旅行は断念することになりました。けれども、それまでの2年間を無駄にはしたく無く、「コロナ禍でもできる色々な経験をしたい」という想いから、2020年の間に輸入販売ビジネスや株式投資を始め、年末からは大学の友人たちを誘ってNPO法人を立ち上げ、活動を始めました。現在は、そのNPO法人の代表として、20名ほどの大学生や高校生と共に、3つの事業を行っています。',
  paragraphThree: '上記のように、私には計画力とその計画の実行力、行動力があります。現在は、労働環境が劣悪な教職の道に進むのをためらっており、将来の選択肢を増やすために就職活動を始めています。色々なキャリアについて教えていただけたら嬉しいです。もしよろしければ、私までご連絡ください。ここまで読んでいただき、ありがとうございました。',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '私の経歴・職歴',
    info: '1998年6月14日生・大阪府池田市出身・池田市立五月丘小学校卒・池田市立渋谷中学校卒・私立雲雀丘学園高等学校卒・国立大学法人大阪教育大学初等教育教員養成課程小学校夜間5年コース在学中。小学校3年生の頃からフットサルを、小学校5年生の頃からサッカーを習い始め、高校卒業まで10年ほどサッカーをプレーし続けました。今は、時々フットサルをプレーしています。大学入学後は登山部に入部し、富士山や日本アルプス、屋久島の宮之浦岳などに登頂しています。',
    info2: '2018年から大阪市内の小学校で働き始め、現在は大阪市立菅北小学校でSSS（スクールサポートスタッフ）として、ICT整備などに携わっています。2020年からAmazonでの輸入販売ビジネス（現在休業中）や株式投資（2020年度は実現損益＋45万円〈投資金額は70万円〉）、NPO法人の運営、Youtubeチャンネルやブログを始めました。',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '私の特徴・趣味',
    info: '私には計画力や実行力・行動力がありますが、私の特筆すべき能力は、計画や実行を行うための情報収集能力です。IELTS 6.0の英語力を利用して英語圏の情報源から情報を入手できます。そして、SNSやインターネット上の断片的な情報同士を結び付けて有用な情報を取得することもできます。 たとえば、私はプログラミングの経験が一切ありませんでしたが、情報収集を行うことで、このGatesbyjsを利用した静的サイトを作成することができました。加えて、私は小学校で3年以上アルバイトをしており、子どもたちと交流することや、理解しやすい方法で子どもたちに物事を教えるのことが得意です。',
    info2: '私の主な趣味は、旅行とサッカー現地観戦です。旅行は行き当たりばったりのスタイルで旅行をすることが多く、見知らぬ街や場所を事前情報を得ずに旅することによる不確実性にドキドキ・ワクワクできる点が好きです。サッカー現地観戦はハイレベルなアスリートのプレーに一喜一憂する観客と一体感を感じれる点が好きです。',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'NPO法人ふらいおん"',
    info: '大学で得た教育分野の知識を活かして、20人以上の仲間たちと無料学習塾や非営利のプログラミング教室などを運営し、教育格差の是正や子どもの居場所づくりを行っています。その他にも、学習指導案検索サイトやiOS向けの英語学習アプリの開発、Podcastでのラジオ配信などを行っています。',
    info2: '私たちの活動資金は僕個人からの60万円に加えて、国や地方自治体、各種慈善団体からの助成金、スポンサーからの寄付などで賄っています。',
    url: 'https://flyon.jp',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '私へのご連絡は、メールからお願いいたします。',
  btn: 'メールアドレス',
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
      name: 'youtube-square',
      url: '',
    },
    {
      id: nanoid(),
      name: 'blog-square',
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
