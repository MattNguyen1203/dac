import React from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

const NewsLayoutE = ({ children }) => {
  return <div>{children}</div>;
};

export default NewsLayoutE;