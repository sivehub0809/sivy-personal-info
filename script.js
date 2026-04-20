const sharedContent = {
  experienceLogos: [
    { id: "nilaa", logoPath: "assets/brands/nilaa.jpg", fallback: "N", link: "https://trynilaa.com" },
    { id: "deevork", logoPath: "assets/brands/deevork.jpg", fallback: "D", link: "#contact" },
    { id: "moostrum", logoPath: "assets/brands/moostrum.jpg", fallback: "M", link: "#contact" },
    { id: "architecture", logoPath: "assets/brands/students-a.jpg", fallback: "AR", link: "#contact" },
    { id: "family", logoPath: "", fallback: "FB", link: "#contact" }
  ],
  educationLogos: [
    { id: "launchpad", logoPath: "", fallback: "2080", link: "#education" },
    { id: "self", logoPath: "", fallback: "SY", link: "https://www.linkedin.com/in/eang-siv-y" }
  ],
  contactLinks: [
    { value: "eangsivy8@gmail.com", href: "mailto:eangsivy8@gmail.com" },
    { value: "linkedin.com/in/eang-siv-y", href: "https://www.linkedin.com/in/eang-siv-y" },
    { value: "github.com/sivehub0809", href: "https://github.com/sivehub0809" },
    { value: "x.com/eangy25765", href: "https://x.com/eangy25765" },
    { value: "trynilaa.com", href: "https://trynilaa.com" }
  ]
};

const translations = {
  en: {
    pageTitle: "Eang Siv Y Personal Website",
    heroHeading: "hey, i'm siv y",
    heroIntro:
      "i'm a cambodian startup founder, ai engineer, and web developer. i build web apps, ai-powered tools, and software companies that go after real problems.",
    journeyHeading: "My journey, shortly",
    journey:
      "I started young by helping my dad design banners and product visuals for our family business. That pushed me into product building, startup execution, and shipping fast. Since then I've built across frontend, backend, AI integration, vibe coding, and machine learning, always around practical problems that real people feel every day.",
    experienceHeading: "What I've done & doing",
    educationHeading: "Education",
    contactTag: "Contact",
    contactHeading: "Find me here",
    essayLabel: "essays",
    contactCopy:
      "dm me by email, linkedin, github, x, or through nilaa. always open to talk about ai, startups, logistics, and building in cambodia.",
    experience: [
      {
        company: "Nilaa",
        role: "Founder & CEO",
        summary:
          "Logistics and trade management platform for importers and business owners. Nilaa Detect reads supplier screenshots and structures the data with AI.",
        dateRange: "Now - Present",
        logoId: "nilaa"
      },
      {
        company: "DeeVork",
        role: "Founder",
        summary:
          "Professional service marketplace for freelancers and experts. Reached 35 users and 20 active freelancers in the first four weeks.",
        dateRange: "Age 16",
        logoId: "deevork"
      },
      {
        company: "Moostrum",
        role: "Co-Founder",
        summary:
          "Colostrum milk powder brand built from zero and sold multiple packages on launch day.",
        dateRange: "Early startup chapter",
        logoId: "moostrum"
      },
      {
        company: "Architecture Research Community",
        role: "Research contributor",
        summary:
          "Built and shared useful work inside an architecture fundamentals community with nearly 6,000 members.",
        dateRange: "Earlier",
        logoId: "architecture"
      },
      {
        company: "Family Business",
        role: "Designer",
        summary:
          "Designed banners and product visuals for our family's reselling business. This is where I learned the basics.",
        dateRange: "Started at 14",
        logoId: "family"
      }
    ],
    education: [
      {
        company: "2080 Ventures / Khmer Enterprise",
        role: "Batch 3 rising startup program",
        summary: "Nilaa was welcomed into the startup launchpad ecosystem in Cambodia.",
        dateRange: "Current",
        logoId: "launchpad"
      },
      {
        company: "Self-taught builder",
        role: "Product, design, engineering",
        summary:
          "Most of my practical learning came from building, shipping, and working directly on real business problems.",
        dateRange: "Ongoing",
        logoId: "self"
      }
    ]
  },
  km: {
    pageTitle: "គេហទំព័រផ្ទាល់ខ្លួន Eang Siv Y",
    heroHeading: "សួស្តី ខ្ញុំគឺ siv y",
    heroIntro:
      "ខ្ញុំជាស្ថាបនិកស្តាតអាប់កម្ពុជា វិស្វករ ai និងអ្នកអភិវឌ្ឍន៍វេប។ ខ្ញុំបង្កើត web apps, ai-powered tools និងក្រុមហ៊ុន software ដែលដោះស្រាយបញ្ហាពិតប្រាកដ។",
    journeyHeading: "ដំណើររបស់ខ្ញុំ ខ្លីៗ",
    journey:
      "ខ្ញុំចាប់ផ្តើមតាំងពីវ័យក្មេង ដោយជួយឪពុករបស់ខ្ញុំរចនាបដា និងរូបភាពផលិតផលសម្រាប់អាជីវកម្មគ្រួសារ។ វាធ្វើឱ្យខ្ញុំចូលទៅក្នុងការសាងសង់ product ការបង្កើត startup និងការចេញផ្សាយអ្វីៗឱ្យបានលឿន។ ចាប់តាំងពីពេលនោះមក ខ្ញុំបានសាងសង់លើ frontend, backend, ai integration, vibe coding និង machine learning ដោយផ្អែកលើបញ្ហាជាក់ស្តែងរបស់មនុស្សពិត។",
    experienceHeading: "អ្វីដែលខ្ញុំបានធ្វើ និងកំពុងធ្វើ",
    educationHeading: "ការសិក្សា",
    contactTag: "ទំនាក់ទំនង",
    contactHeading: "ស្វែងរកខ្ញុំទីនេះ",
    essayLabel: "អត្ថបទ",
    contactCopy:
      "អ្នកអាចទាក់ទងខ្ញុំតាម email, linkedin, github, x ឬតាម nilaa។ ខ្ញុំតែងតែបើកចិត្តនិយាយអំពី ai, startups, logistics និងការសាងសង់នៅកម្ពុជា។",
    experience: [
      {
        company: "Nilaa",
        role: "Founder & CEO",
        summary:
          "វេទិកាគ្រប់គ្រងឡូជីស្ទិក និងពាណិជ្ជកម្មសម្រាប់អ្នកនាំចូល និងម្ចាស់អាជីវកម្ម។ Nilaa Detect អាន supplier screenshots ហើយរៀបចំទិន្នន័យដោយ ai។",
        dateRange: "បច្ចុប្បន្ន - ឥឡូវនេះ",
        logoId: "nilaa"
      },
      {
        company: "DeeVork",
        role: "Founder",
        summary:
          "វេទិកាសេវាកម្មវិជ្ជាជីវៈសម្រាប់ freelancers និង experts។ ទទួលបាន users 35 នាក់ និង freelancers សកម្ម 20 នាក់ក្នុង 4 សប្តាហ៍ដំបូង។",
        dateRange: "អាយុ 16",
        logoId: "deevork"
      },
      {
        company: "Moostrum",
        role: "Co-Founder",
        summary:
          "ម៉ាក colostrum milk powder ដែលបានសាងសង់ពីសូន្យ និងលក់បានជាច្រើនកញ្ចប់នៅថ្ងៃបើកដំណើរការ។",
        dateRange: "ជំពូក startup ដំបូង",
        logoId: "moostrum"
      },
      {
        company: "Architecture Research Community",
        role: "Research contributor",
        summary:
          "សាងសង់ និងចែករំលែកការងារដែលមានប្រយោជន៍ក្នុងសហគមន៍ architecture fundamentals ដែលមានសមាជិកជិត 6,000 នាក់។",
        dateRange: "មុននេះ",
        logoId: "architecture"
      },
      {
        company: "Family Business",
        role: "Designer",
        summary:
          "រចនាបដា និងរូបភាពផលិតផលសម្រាប់អាជីវកម្ម reselling របស់គ្រួសារ។ នេះជាកន្លែងដែលខ្ញុំរៀនមូលដ្ឋានដំបូង។",
        dateRange: "ចាប់ផ្តើមនៅអាយុ 14",
        logoId: "family"
      }
    ],
    education: [
      {
        company: "2080 Ventures / Khmer Enterprise",
        role: "Batch 3 rising startup program",
        summary: "Nilaa ត្រូវបានទទួលស្វាគមន៍ចូលក្នុង startup launchpad ecosystem នៅកម្ពុជា។",
        dateRange: "បច្ចុប្បន្ន",
        logoId: "launchpad"
      },
      {
        company: "Self-taught builder",
        role: "Product, design, engineering",
        summary:
          "ការរៀនអនុវត្តភាគច្រើនរបស់ខ្ញុំ មកពីការសាងសង់ ការចេញផ្សាយ និងការដោះស្រាយបញ្ហាអាជីវកម្មពិតដោយផ្ទាល់។",
        dateRange: "បន្ត",
        logoId: "self"
      }
    ]
  },
  zh: {
    pageTitle: "Eang Siv Y 个人网站",
    heroHeading: "你好，我是 siv y",
    heroIntro:
      "我是柬埔寨创业者、ai 工程师和网页开发者。我打造 web apps、ai-powered tools，以及真正解决现实问题的软件公司。",
    journeyHeading: "我的经历，简短版",
    journey:
      "我很早就开始帮父亲为家里的生意设计横幅和产品视觉，这让我进入了产品、创业和快速执行的世界。从那以后，我一直在做 frontend、backend、ai integration、vibe coding 和 machine learning，始终围绕真实用户和真实业务问题。",
    experienceHeading: "我做过什么，也正在做什么",
    educationHeading: "教育",
    contactTag: "联系",
    contactHeading: "在这里找到我",
    essayLabel: "文章",
    contactCopy:
      "你可以通过 email、linkedin、github、x 或 nilaa 联系我。我一直愿意聊 ai、创业、物流，以及在柬埔寨打造产品。",
    experience: [
      {
        company: "Nilaa",
        role: "Founder & CEO",
        summary:
          "为进口商和企业主打造的物流与贸易管理平台。Nilaa Detect 可以读取供应商截图，并用 ai 整理数据。",
        dateRange: "现在 - 至今",
        logoId: "nilaa"
      },
      {
        company: "DeeVork",
        role: "Founder",
        summary:
          "面向 freelancers 和 experts 的专业服务平台。上线前四周获得了 35 位用户和 20 位活跃自由职业者。",
        dateRange: "16 岁时",
        logoId: "deevork"
      },
      {
        company: "Moostrum",
        role: "Co-Founder",
        summary:
          "一个从零开始打造的初乳奶粉品牌，并在上线当天卖出多份产品。",
        dateRange: "早期创业阶段",
        logoId: "moostrum"
      },
      {
        company: "Architecture Research Community",
        role: "Research contributor",
        summary:
          "在一个接近 6,000 人的建筑基础研究社区中，持续产出并分享有用的内容。",
        dateRange: "更早之前",
        logoId: "architecture"
      },
      {
        company: "Family Business",
        role: "Designer",
        summary:
          "为家里的转售生意设计横幅和产品视觉。这是我最早学习基础技能的地方。",
        dateRange: "14 岁开始",
        logoId: "family"
      }
    ],
    education: [
      {
        company: "2080 Ventures / Khmer Enterprise",
        role: "Batch 3 rising startup program",
        summary: "Nilaa 被接纳进入柬埔寨的 startup launchpad 生态系统。",
        dateRange: "当前",
        logoId: "launchpad"
      },
      {
        company: "Self-taught builder",
        role: "Product, design, engineering",
        summary:
          "我大部分真正的学习，都来自亲手构建、发布产品，以及直接解决真实商业问题。",
        dateRange: "持续进行中",
        logoId: "self"
      }
    ]
  },
  ja: {
    pageTitle: "Eang Siv Y の個人サイト",
    heroHeading: "こんにちは、siv y です",
    heroIntro:
      "私はカンボジアのスタートアップ創業者、ai エンジニア、そして web 開発者です。web apps、ai-powered tools、そして現実の課題を解決するソフトウェア企業を作っています。",
    journeyHeading: "これまでの道のり、短く",
    journey:
      "私は若い頃、家族のビジネスのために父と一緒にバナーや商品ビジュアルを作るところから始めました。そこから product、startup execution、そして素早く作って出すことを学びました。その後も frontend、backend、ai integration、vibe coding、machine learning に取り組み、常に本物のユーザー課題に向き合ってきました。",
    experienceHeading: "これまでにやってきたこと",
    educationHeading: "教育",
    contactTag: "連絡",
    contactHeading: "ここで見つけてください",
    essayLabel: "エッセイ",
    contactCopy:
      "email、linkedin、github、x、または nilaa から連絡できます。ai、スタートアップ、物流、そしてカンボジアでのものづくりについて話すのが好きです。",
    experience: [
      {
        company: "Nilaa",
        role: "Founder & CEO",
        summary:
          "輸入業者や事業者向けの物流・貿易管理プラットフォーム。Nilaa Detect は supplier screenshots を読み取り、ai でデータを整理します。",
        dateRange: "現在 - Present",
        logoId: "nilaa"
      },
      {
        company: "DeeVork",
        role: "Founder",
        summary:
          "freelancers と experts 向けのプロフェッショナルサービスプラットフォーム。最初の 4 週間で 35 人のユーザーと 20 人のアクティブなフリーランサーを獲得しました。",
        dateRange: "16 歳",
        logoId: "deevork"
      },
      {
        company: "Moostrum",
        role: "Co-Founder",
        summary:
          "ゼロから立ち上げ、公開初日に複数の商品を販売した colostrum milk powder ブランド。",
        dateRange: "初期の創業期",
        logoId: "moostrum"
      },
      {
        company: "Architecture Research Community",
        role: "Research contributor",
        summary:
          "約 6,000 人規模の architecture fundamentals コミュニティで、有用なものを作り共有してきました。",
        dateRange: "それ以前",
        logoId: "architecture"
      },
      {
        company: "Family Business",
        role: "Designer",
        summary:
          "家族の reselling business のためにバナーや商品ビジュアルを制作。ここが私の原点です。",
        dateRange: "14 歳から",
        logoId: "family"
      }
    ],
    education: [
      {
        company: "2080 Ventures / Khmer Enterprise",
        role: "Batch 3 rising startup program",
        summary: "Nilaa はカンボジアの startup launchpad ecosystem に迎えられました。",
        dateRange: "現在",
        logoId: "launchpad"
      },
      {
        company: "Self-taught builder",
        role: "Product, design, engineering",
        summary:
          "私の実践的な学びの大半は、実際に作り、出し、現実のビジネス課題に向き合う中で得たものです。",
        dateRange: "継続中",
        logoId: "self"
      }
    ]
  }
};

let currentLanguage = "en";

const getLogoMeta = (logoId, group) => {
  return group.find((item) => item.id === logoId) || { logoPath: "", fallback: "?" };
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
};

const createLogoNode = (logoMeta, label) => {
  const wrapper = document.createElement("a");
  wrapper.className = "timeline-logo-link";
  wrapper.href = logoMeta.link || "#contact";
  wrapper.setAttribute("aria-label", `Open ${label}`);

  if (/^https?:\/\//.test(wrapper.href)) {
    wrapper.target = "_blank";
    wrapper.rel = "noreferrer";
  }

  const badge = document.createElement("div");
  badge.className = "timeline-logo";

  if (logoMeta.logoPath) {
    const image = document.createElement("img");
    image.src = logoMeta.logoPath;
    image.alt = `${label} logo`;
    badge.appendChild(image);
  } else {
    const fallback = document.createElement("span");
    fallback.textContent = logoMeta.fallback;
    badge.appendChild(fallback);
  }

  wrapper.appendChild(badge);
  return wrapper;
};

const createTimelineItem = (item, logoMeta) => {
  const row = document.createElement("article");
  row.className = "timeline-item";

  const logo = createLogoNode(logoMeta, item.company);

  const main = document.createElement("div");
  main.className = "timeline-main";

  const company = document.createElement("h3");
  company.className = "timeline-company";
  company.textContent = item.company;

  const role = document.createElement("p");
  role.className = "timeline-role timeline-meta";
  role.textContent = item.role;

  const summary = document.createElement("p");
  summary.className = "timeline-support";
  summary.textContent = item.summary;

  const date = document.createElement("div");
  date.className = "timeline-date";
  date.textContent = item.dateRange;

  main.appendChild(company);
  main.appendChild(role);
  main.appendChild(summary);

  row.appendChild(logo);
  row.appendChild(main);
  row.appendChild(date);

  return row;
};

const createContactLink = ({ value, href }, index) => {
  const link = document.createElement("a");
  link.className = "contact-link";
  link.href = href;
  link.textContent = value;

  if (/^https?:\/\//.test(href) || href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  const fragment = document.createDocumentFragment();
  fragment.appendChild(link);

  if (index < sharedContent.contactLinks.length - 1) {
    fragment.appendChild(document.createTextNode(" | "));
  }

  return fragment;
};

const renderTimeline = (targetId, items, logoGroup) => {
  const container = document.getElementById(targetId);
  container.innerHTML = "";

  items.forEach((item) => {
    const logoMeta = getLogoMeta(item.logoId, logoGroup);
    container.appendChild(createTimelineItem(item, logoMeta));
  });
};

const render = () => {
  const copy = translations[currentLanguage];
  document.title = copy.pageTitle;
  document.documentElement.lang = currentLanguage;

  setText("hero-heading", copy.heroHeading);
  setText("hero-intro", copy.heroIntro);
  setText("journey-heading", copy.journeyHeading);
  setText("journey-copy", copy.journey);
  setText("experience-heading", copy.experienceHeading);
  setText("education-heading", copy.educationHeading);
  setText("contact-tag", copy.contactTag);
  setText("contact-heading", copy.contactHeading);
  setText("essay-link", copy.essayLabel);
  setText("contact-copy", copy.contactCopy);

  renderTimeline("experience-list", copy.experience, sharedContent.experienceLogos);
  renderTimeline("education-list", copy.education, sharedContent.educationLogos);

  const contactLinks = document.getElementById("contact-links");
  contactLinks.innerHTML = "";
  contactLinks.setAttribute("lang", currentLanguage);
  sharedContent.contactLinks.forEach((item, index) => {
    contactLinks.appendChild(createContactLink(item, index));
  });
};

const setupLanguageSwitcher = () => {
  const buttons = document.querySelectorAll(".lang-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage = button.dataset.lang;
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });
};

render();
setupLanguageSwitcher();
