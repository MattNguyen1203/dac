import React from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

const RecruitmentLayoutE = ({ children }) => {
  return <div>{children}</div>;
};

export default RecruitmentLayoutE;