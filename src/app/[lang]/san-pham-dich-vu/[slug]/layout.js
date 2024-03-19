import React from "react";

export async function generateStaticParams() {
  return [{ lang: "vi" }];
}

const ProductLayoutV = ({ children }) => {
  return <div>{children}</div>;
};

export default ProductLayoutV;