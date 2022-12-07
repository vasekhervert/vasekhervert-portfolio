import Button from "./components/Button";
import Section from "./components/Section";
import Header from "./components/Header";

const navLinks: { label: string; path: string }[] = [
  { label: "about", path: "/about" },
  { label: "projects", path: "/projects" },
  { label: "contact", path: "/contact" },
];
function App() {
  return (
    <div className="bg-gray-900 text-white">
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

      <Section id="home">
        <div className="col-span-8 col-start-3">
          <p className="font-mono text-sky-400">
            Hi, my name is Václav Hervert.
          </p>
          <h1 className="text-6xl font-bold py-6 font-display">
            I'm a frontend developer
          </h1>
          <p className="max-w-xl leading-7 mb-8">
            with an overflow to backend development and UX in heart. Pushing
            buttons to create something great for more than a decade. Currently
            freelancing and looking for new challenges.
          </p>
          <Button classes="block" label="More about me" />
          <Button classes="block" label="Check my projects" />
        </div>
      </Section>

      <Section id="about">
        <div className="col-span-8 col-start-3">
          <h2 className="font-mono text-sky-400 mb-4 text-xl">About me</h2>
          <p className="max-w-xl leading-7 mb-8">
            Hello there! My name is Václav and I'm a frondend developer. I love
            to develop useful products, improve them based on user metrics and
            watch them grow.
          </p>
          <p className="max-w-xl leading-7 mb-8">
            With more than a decade of experience in web design and development,
            I have a strong background in frontend technologies and a nice feel
            for UX.
          </p>
          <p className="max-w-xl leading-7 mb-4">
            Lately I worked with these technologies:
          </p>
          <div className="grid grid-cols-2 max-w-xl mb-8">
            <ul className="text-sm leading-7">
              <li>JavaScript</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Node.js</li>
            </ul>
            <ul className="text-sm leading-7">
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Firebase</li>
              <li>Express.js</li>
            </ul>
          </div>

          <p className="text-xs max-w-xl leading-7 mb-8">
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
        </div>
      </Section>
    </div>
  );
}

export default App;
