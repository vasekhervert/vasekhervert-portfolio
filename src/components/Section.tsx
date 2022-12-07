interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Section({ children }: Props) {
  return (
    <section className="grid grid-cols-12 max-w-7xl h-screen mx-auto items-center">
      {children}
    </section>
  );
}
