interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Header({ children }: Props) {
  return (
    <header className="flex justify-between absolute top-0 left-0 w-screen max-w-full p-8">
      {children}
    </header>
  );
}
