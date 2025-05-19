import React, { ReactNode } from "react";

// define props types
type Props = {
  children: ReactNode,
};

const SectionHeading = ({ children }: Props) => {
  return <h1 className="w-fit text-center px-4 py-3 mx-auto text-blue-800 text-2xl md:text-4xl uppercase">{children}</h1>;
};

export default SectionHeading;
