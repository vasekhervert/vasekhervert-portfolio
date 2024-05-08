export const experiences: {
  range: string;
  title: string;
  text: string;
  link?: string;
}[] = [
  {
    range: "Feb 2023 - present",
    title: "Frontend developer - iD-Sign",
    link: "https://www.id-sign.com/",
    text: "Development of various projects such as digitalnisklady.cz, Škola s nadhledem, realitkanapodily.cz and more.",
  },
  {
    range: "2017 - present",
    title: "Frontend developer - Freelance",
    text: "Building apps that help my clients to fulfill their bussiness goals. Work with technologies like React, JavaScript ES6+, Firebase, TailwindCSS, Next.js, Node.js and others. Constantly learning more.",
  },
  {
    range: "2016 - 2018",
    title: "Web designer/developer - Czech Promotion",
    link: "https://www.promotion.cz/",
    text: "Worked in a small team, designed and developed a huge number of websites, most of them being custom WordPress themes. Also designed few e-commerce sites for clients like Scanquilt and Tebau. I also designed thousands of PPC banners.",
  },
  {
    range: "2012 - 2016",
    title: "Web developer/designer - Freelance",
    text: "Designed and developed websites for for individuals and small bussinesses using HTML, CSS and JavaScript/jQuery, later I also started developing custom WordPress themes. Also designed logos, bussiness cards, etc.",
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
    link: "https://hervert.dev/demo/zimovani/",
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
    link: "https://hervert.dev/demo/aim-practice",
    github: "https://github.com/vasekhervert/aim-practice",
  },
];
