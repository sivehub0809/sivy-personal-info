const profile = {
  name: "Eang Siv Y",
  headline: "Cambodian startup founder, AI engineer, and web developer.",
  summary:
    "Hey, I'm Siv Y. I build web apps, AI-powered tools, and software companies that go after real problems. Right now I'm the founder and CEO of Nilaa, a logistics and trade management platform for importers and business owners, and we were recently welcomed as a batch 3 rising startup team under 2080 Ventures' startup launchpad program in Cambodia.",
  location: "Cambodia",
  status: "building Nilaa at the intersection of logistics, software, and AI",
  about:
    "I work across the full stack, from interfaces and backend systems to AI integration, vibe coding, and machine learning. I started at 14 by helping my dad design banners and product visuals for our family reselling business, and that early hands-on work shaped how I think about products: practical, fast-moving, and grounded in real customer needs.",
  note:
    "I like building tools that take messy, manual workflows and turn them into something clear, fast, and usable.",
  focus: [
    {
      title: "AI for real operations",
      body: "I care about applying AI where it actually removes friction, especially in logistics, trade, and business workflows filled with scattered data and repetitive manual work."
    },
    {
      title: "Full-stack product building",
      body: "I build across the stack: frontend experiences, backend systems, AI-powered features, and the product thinking needed to make everything useful in the real world."
    },
    {
      title: "Founder-led execution",
      body: "I'm interested in moving quickly, validating with users, and building companies that solve painful problems instead of chasing trends."
    }
  ],
  timeline: [
    {
      year: "now",
      title: "Nilaa - Founder & CEO",
      body: "Built Nilaa after seeing importers and business owners struggle with tracking numbers, supplier screenshots, and endless spreadsheets just to understand where orders were. Nilaa brings everything into one dashboard, and Nilaa Detect lets users upload screenshots so AI can read and structure the data, saving up to 70% of manual data entry."
    },
    {
      year: "at 16",
      title: "DeeVork - Founder",
      body: "Started DeeVork, a professional service marketplace for freelancers and experts. Within four weeks of launching, the platform had 35 users and 20 active freelancers. After a few months, my brother joined as co-founder and later took over as CEO, which gave me the space to focus on building Nilaa."
    },
    {
      year: "earlier",
      title: "Moostrum, architecture community, and family business",
      body: "Co-founded Moostrum, a colostrum milk powder brand that sold several packages on launch day, contributed as a researcher in an architecture fundamentals community of nearly 1,000 members, and learned the basics of design by creating banners and product visuals for my family's reselling business."
    }
  ],
  writing: [
    {
      title: "Nilaa and logistics workflows",
      description: "How better software and AI can simplify trade management for importers and business owners.",
      link: "#contact"
    },
    {
      title: "Building from a young age",
      description: "Lessons from design work, early startups, community research, and shipping products fast.",
      link: "#about"
    }
  ],
  contactText:
    "If you're building something meaningful, want to talk startups, or see ways AI can simplify real business workflows, I'm always open to a good conversation.",
  links: [
    { label: "currently", href: "#timeline" },
    { label: "nilaa", href: "#timeline" },
    { label: "about", href: "#about" },
    { label: "contact", href: "#contact" }
  ]
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
};

const createLink = ({ label, href }) => {
  const link = document.createElement("a");
  link.className = "pill-link";
  link.href = href;
  link.textContent = label;
  if (/^https?:\/\//.test(href)) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const render = () => {
  document.title = `${profile.name} | Personal Website`;

  setText("hero-heading", `${profile.name}.`);
  setText("hero-headline", profile.headline);
  setText("hero-summary", profile.summary);
  setText("hero-location", profile.location);
  setText("hero-status", profile.status);
  setText("about-text", profile.about);
  setText("guiding-note", profile.note);
  setText("contact-text", profile.contactText);

  const heroLinks = document.getElementById("hero-links");
  const contactLinks = document.getElementById("contact-links");
  profile.links.forEach((item) => {
    heroLinks.appendChild(createLink(item));
    contactLinks.appendChild(createLink(item));
  });

  const focusList = document.getElementById("focus-list");
  profile.focus.forEach((item) => {
    const card = document.createElement("article");
    card.className = "focus-card";
    card.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    focusList.appendChild(card);
  });

  const timelineList = document.getElementById("timeline-list");
  profile.timeline.forEach((item) => {
    const block = document.createElement("article");
    block.className = "timeline-item";
    block.innerHTML = `
      <div class="timeline-header">
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-year">${item.year}</div>
      </div>
      <p class="timeline-copy">${item.body}</p>
    `;
    timelineList.appendChild(block);
  });

  const writingList = document.getElementById("writing-list");
  profile.writing.forEach((item) => {
    const card = document.createElement("article");
    card.className = "writing-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    const links = document.createElement("div");
    links.className = "writing-links";
    links.appendChild(createLink({ label: "open", href: item.link }));
    card.appendChild(links);
    writingList.appendChild(card);
  });
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
};

render();
setupReveal();
