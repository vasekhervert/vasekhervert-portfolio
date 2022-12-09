import { GithubIcon, LinkIcon } from "./icons";

interface Props {
  year: string;
  title: string;
  description: string;
  link?: string | undefined;
  techstack: Array<string>;
  github?: string;
}

export default function Project({
  year,
  title,
  description,
  link,
  techstack,
  github,
}: Props) {
  return (
    <div className="mb-8">
      <p className="mb-2">
        <span className="text-gray-500 mr-2">{year}</span>
        <span className="text-sky-300 mr-2">–</span>

        {link ? (
          <a href={link}>
            {title}
            <LinkIcon classes="inline max-w-4 max-h-4 ml-1" />
          </a>
        ) : (
          <span>{title}</span>
        )}
      </p>

      <p className="text-gray-400 mb-2">{description}</p>

      {techstack.map((i, idx) => (
        <span className="text-gray-500">
          {i}
          {idx < techstack.length - 1 ? " | " : ""}
        </span>
      ))}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="ml-2 rounded-sm px-2 py-1.5 hover:bg-gray-900 transition-all"
        >
          <GithubIcon classes="inline-block max-w-4 max-h-4" />
        </a>
      )}
    </div>
  );
}
