import React from "react";

export async function generateStaticParams() {
  return [{ lang: "vi" }];
}

const AboutLayoutV = ({ children }) => {
  return <div>{children}</div>;
};

export default AboutLayoutV;