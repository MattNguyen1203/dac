import React from "react";

export async function generateStaticParams() {
  return [{ lang: "vi" }];
}

const NewsLayoutV = ({ children }) => {
  return <div>{children}</div>;
};

export default NewsLayoutV;