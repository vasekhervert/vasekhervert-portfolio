interface Props {
  id: string;
  children: any;
  classes?: string;
}

export default function Section({ children, id, classes }: Props) {
  return (
    <section id={id} className={`mb-12 ${classes}`}>
      {children}
    </section>
  );
}
