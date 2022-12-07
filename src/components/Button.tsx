import React from "react";

type Props = {
  //children: JSX.Element;
  label: string;
  classes: string;
};

export default function Button({ label, classes }: Props) {
  return (
    <button
      className={`${classes} font-mono text-sm text-sky-400 py-2 hover:pl-1 transition-all underline hover:no-underline`}
    >
      {label}
    </button>
  );
}
