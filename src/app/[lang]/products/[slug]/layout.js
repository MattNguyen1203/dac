import React from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

const ProductLayoutE = ({ children }) => {
  return <div>{children}</div>;
};

export default ProductLayoutE;