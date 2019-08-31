import React from "react";
import * as Icons from "../../assets/icons/index.js";

const Icon = ({ icon, ...rest }) => {
  let Svg = Icons[icon];

  return <Svg {...rest} />;
};

export default Icon;
