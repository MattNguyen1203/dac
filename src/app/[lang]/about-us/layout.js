import React from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

const AboutLayoutE = ({ children }) => {
  return <div>{children}</div>;
};

export default AboutLayoutE;