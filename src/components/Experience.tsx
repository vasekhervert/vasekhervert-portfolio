interface Props {
  range: string;
  title: string;
  text: string;
  link?: string | undefined;
}

export default function Experience({ range, title, text, link }: Props) {
  return (
    <div className="mb-8">
      <p className="mb-2">
        <span className="text-gray-500 mr-2">{range}</span>
        <span className="text-sky-300 mr-2">–</span>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </p>

      <p className="text-gray-400">{text}</p>
    </div>
  );
}
