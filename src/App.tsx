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
        <div>about</div>
      </Section>
    </div>
  );
}

export default App;
