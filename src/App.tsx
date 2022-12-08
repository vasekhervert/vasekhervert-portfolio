import Section from "./components/Section";
import Header from "./components/Header";
import { experiences, projects } from "./constants";
import Experience from "./components/Experience";
import Project from "./components/Project";

const navLinks: { label: string; path: string }[] = [
  { label: "about", path: "/about" },
  { label: "projects", path: "/projects" },
  { label: "contact", path: "/contact" },
];

function App() {
  return (
    <div className="bg-black text-white">
      <Header>
        <a href="/" className="font-bold text-3xl relative">
          VH<span className="text-xs text-sky-400 font-mono">.dev</span>
        </a>
        <nav className="font-mono text-sm">
          {navLinks.map((link) => (
            <a key={link.label} href={link.path} className="px-4">
              <span className="text-sky-400">/</span>
              {link.label}
            </a>
          ))}
        </nav>
      </Header>
      <div className="max-w-lg mx-auto py-28 px-8 text-sm">
        <Section id="head">
          <div className="grid grid-cols-4 gap-4 items-center">
            <img className="rounded-full" src="/avatar.jpg" alt="" />
            <div className="col-span-3 leading-8">
              <h1 className="text-xl mb-1">Václav Hervert</h1>
              <p className="text-sm text-gray-400">
                a frontend developer
                <span className="block text-sm text-gray-500">
                  based in{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Bohemian_Forest"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bohemian Forest
                  </a>
                </span>
              </p>
            </div>
          </div>
        </Section>

        <Section id="aboutme">
          <h2 className="text-sm mb-2">About me</h2>
          <p className="text-sm text-gray-400">
            I love to develop useful products and improve them based on user
            metrics. With over a decade of experience in web design and
            development, I have a strong background in frontend technologies and
            a nice feel for UX.
          </p>
        </Section>

        <Section id="experience">
          <h2 className="text-sm mb-8">Work experience</h2>
          {experiences.map((ex) => (
            <Experience
              range={ex.range}
              text={ex.text}
              title={ex.title}
              link={ex.link}
            />
          ))}
        </Section>

        <Section id="projects">
          <h2 className="text-sm mb-8">Featured Projects</h2>
          {projects.map((project) => (
            <Project
              title={project.title}
              year={project.year}
              link={project.link}
              description={project.description}
              techstack={project.techstack}
              github={project.github}
            />
          ))}
        </Section>

        {/* <p className="text-xs max-w-xl leading-7 mb-8 text-gray-400">
          Special thanks for support in my beginnings goes to{" "}
          <a href="https://allien.work/" target="_blank" rel="noreferrer">
            Martin Allien http://simpled.cz/_client/zimovani/ceny-zimovani-lodi.html
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/ji%C5%99%C3%AD-cerhan-02b30332/"
            target="_blank"
            rel="noreferrer"
          >
            Jiří Cerhan
          </a>
          . Thank you, guys!
        </p> */}
      </div>
    </div>
  );
}

export default App;
