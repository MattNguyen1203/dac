import React from "react";

export async function generateStaticParams() {
  return [{ lang: "vi" }];
}

const RecruitmentLayoutV = ({ children }) => {
  return <div>{children}</div>;
};

export default RecruitmentLayoutV;