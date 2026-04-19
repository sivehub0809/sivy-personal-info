const profile = {
  name: "Eang Siv Y.",
  tagline: "cambodian startup founder, ai engineer, and web developer",
  intro:
    "Hey, I'm Siv Y. I build web apps, AI-powered tools, and software companies that go after real problems. Right now I'm building Nilaa, a logistics and trade management platform for importers and business owners in Cambodia.",
  location: "cambodia",
  about:
    "I work across product, frontend, backend, AI integration, vibe coding, and machine learning. I started young by helping my dad design banners and product visuals for our family business, and that shaped how I build today: practical, fast, and grounded in real user problems.",
  current:
    "Founder and CEO at Nilaa. We built Nilaa after seeing importers and business owners drown in scattered tracking numbers, supplier screenshots, and manual spreadsheets just to know where their orders were. Nilaa brings everything into one dashboard, and Nilaa Detect uses AI to read and structure screenshots, cutting manual data entry by up to 70%. Nilaa was also welcomed into Khmer Enterprise Organization and 2080 Ventures' batch 3 rising startup program.",
  previous: [
    "Founded DeeVork, a professional service marketplace for freelancers and experts. Within four weeks, we had 35 users and 20 active freelancers.",
    "Co-founded Moostrum, a colostrum milk powder brand that sold several packages on launch day.",
    "Did research in an architecture fundamentals community with nearly 1,000 members.",
    "Started at 14 by designing banners and product visuals for my family's reselling business."
  ],
  contactCopy:
    "If you want to build, collaborate, or talk about startups, AI, and logistics, reach me here.",
  contactLinks: [
    {
      label: "email",
      value: "eangsivy8@gmail.com",
      href: "mailto:eangsivy8@gmail.com"
    },
    {
      label: "linkedin",
      value: "linkedin.com/in/eang-siv-y",
      href: "https://www.linkedin.com/in/eang-siv-y"
    },
    {
      label: "github",
      value: "github.com/sivehub0809",
      href: "https://github.com/sivehub0809"
    },
    {
      label: "x",
      value: "x.com/eangy25765",
      href: "https://x.com/eangy25765"
    },
    {
      label: "nilaa",
      value: "trynilaa.com",
      href: "https://trynilaa.com"
    }
  ]
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
};

const createContactLink = ({ label, value, href }, index) => {
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

  if (index < profile.contactLinks.length - 1) {
    fragment.appendChild(document.createTextNode(" | "));
  }

  return fragment;
};

const render = () => {
  document.title = `${profile.name} Personal Website`;

  setText("name", profile.name);
  setText("tagline", profile.tagline);
  setText("intro", profile.intro);
  setText("location", profile.location);
  setText("about-copy", profile.about);
  setText("current-copy", profile.current);
  setText("contact-copy", profile.contactCopy);

  const previousList = document.getElementById("previous-list");
  profile.previous.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    previousList.appendChild(listItem);
  });

  const contactLinks = document.getElementById("contact-links");
  profile.contactLinks.forEach((item, index) => {
    contactLinks.appendChild(createContactLink(item, index));
  });
};

render();
