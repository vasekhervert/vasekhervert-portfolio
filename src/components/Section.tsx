interface Props {
  id: string;
  children: any;
}

export default function Section({ children, id }: Props) {
  return (
    <section id={id} className="mb-12">
      {children}
    </section>
  );
}
