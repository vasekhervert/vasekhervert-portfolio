export const experiences: {
  range: string;
  title: string;
  text: string;
  link?: string;
}[] = [
  {
    range: "2017 - present",
    title: "Frontend dev - Freelance",
    text: "Building apps that brings my clients bussiness closer to their customers. I work with technologies like React, Javascript, Firebase, TailwindCSS, Next.js, Node.js and others. Constantly learning more.",
  },
  {
    range: "2016 - 2018",
    title: "Web designer/developer - Czech Promotion",
    link: "https://www.promotion.cz/",
    text: "Worked in a small team, designed and developed a huge number of websites, most of them being custom WordPress templates. Also designed few e-commerce sites for clients like Scanquilt and Tebau. I also designed thousands of PPC banners.",
  },
  {
    range: "2012 - 2016",
    title: "Web developer/designer - Freelance",
    text: "Designed and developed sites for for individuals and small bussinesses using HTML and CSS, later I also got into WordPress. Also designed logos, bussiness cards, etc.",
  },
];

export const projects: {
  year: string;
  title: string;
  description: string;
  link?: string | undefined;
  techstack: Array<string>;
  github?: string;
}[] = [
  {
    title: "Food order and delivery system",
    year: "2020",
    link: "https://rozvoz.pizzamaxim.cz/",
    description:
      "A food delivery web app I built for a local italian restaurant. Users can order meals online for delivery or local pickup.",
    techstack: ["React", "SCSS", "Firebase", "REST"],
  },
  {
    title: "B2B/B2C offer generator",
    year: "2020",
    description: "A simple tool for generating b2b/b2c offers in PDF.",
    techstack: ["React", "SCSS", "Express.js"],
    github: "https://github.com/vasekhervert/nabidkar/",
  },
  {
    title: "Boat storage price calculator",
    year: "2021",
    link: "http://simpled.cz/_client/zimovani/ceny-zimovani-lodi.html",
    description:
      "A small web app, where users can calculate their boat storage price, download the details in PDF or request an offer.",
    techstack: ["React", "Firebase"],
  },
  {
    title: "Oknium s.r.o. website",
    year: "2022",
    description: "Work in progress. Website for a window installation company.",
    link: "https://oknium.cz/",
    techstack: ["React", "TailwindCSS", "WordPress", "REST"],
  },
  {
    title: "Aim practice",
    year: "2022",
    description: "A first person shooter game inspired by aim400kg.ru.",
    techstack: ["React", "SCSS"],
    link: "http://simpled.cz/_client/zimovani/ceny-zimovani-lodi.html",
    github: "https://github.com/vasekhervert/aim-practice",
  },
];
