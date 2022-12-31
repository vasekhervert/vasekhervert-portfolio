import Section from "./components/Section";
import { experiences, projects } from "./constants";
import Experience from "./components/Experience";
import Project from "./components/Project";
import {
  GithubIcon,
  LinkIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./components/icons";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-28 px-8 text-sm grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 relative">
          <div className="md:sticky top-28">
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
                      <LinkIcon classes="inline max-w-4 max-h-4 ml-1" />
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
                development, I have a strong background in frontend technologies
                and a nice feel for UX.
              </p>
            </Section>

            <Section id="links" classes="flex items-center">
              <a
                href="https://github.com/vasekhervert/"
                target="_blank"
                rel="noreferrer"
                className="block w-8 h-8 p-2 rounded-sm hover:bg-gray-900 transition-all"
              >
                <GithubIcon classes="block mx-auto" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaclavhervert/"
                target="_blank"
                rel="noreferrer"
                className="block w-8 h-8 p-2 ml-2 rounded-sm hover:bg-gray-900 transition-all"
              >
                <LinkedInIcon classes="block mx-auto" />
              </a>
              <a
                href="https://twitter.com/vasekhervert"
                target="_blank"
                rel="noreferrer"
                className="block w-8 h-8 p-2 ml-2 rounded-sm hover:bg-gray-900 transition-all"
              >
                <TwitterIcon classes="block mx-auto" />
              </a>
              <a
                href="mailto:vaclav@hervert.dev"
                className="p-2 ml-2 rounded-sm hover:bg-gray-900 transition-all"
              >
                vaclav@hervert.dev
              </a>
            </Section>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-7">
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

          <Section id="kudos">
            <h2 className="text-sm mb-8">Kudos</h2>
            <p className="text-xs max-w-xl leading-7 mb-8 text-gray-400">
              Special thanks for support in my beginnings goes to{" "}
              <a href="https://allien.work/" target="_blank" rel="noreferrer">
                Martin Allien
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
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
