import { Github, Link } from "./icons";

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
        {title}
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <Link classes="inline ml-2 max-w-4 max-h-4 fill-white" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <Github classes="inline ml-2 max-w-4 max-h-4 fill-white" />
          </a>
        )}
      </p>

      <p className="text-gray-400 mb-2">{description}</p>

      {techstack.map((i, idx) => (
        <span className="text-gray-500">
          {i}
          {idx < techstack.length - 1 ? " | " : ""}
        </span>
      ))}
    </div>
  );
}
