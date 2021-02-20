import { GatsbyBrowser } from "gatsby";
import React from "react";

const page: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <>{element}</>;
};

export default page;
