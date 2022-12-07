interface Props {
  id: string;
  children: JSX.Element | JSX.Element[];
}

export default function Section({ children, id }: Props) {
  return (
    <section
      id={id}
      className="grid grid-cols-12 max-w-7xl h-screen mx-auto items-center"
    >
      {children}
    </section>
  );
}
