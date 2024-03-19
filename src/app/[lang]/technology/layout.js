import React from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

const TechnologyLayoutE = ({ children }) => {
  return <div>{children}</div>;
};

export default TechnologyLayoutE;