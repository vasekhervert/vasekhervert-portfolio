import React from "react";

type Props = {
  //children: JSX.Element;
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <button className="font-mono text-sm border border-sky-400 text-sky-400 rounded-md py-4 px-6 hover:bg-sky-400/25 transition-all hover:ease-in">
      {label}
    </button>
  );
}
