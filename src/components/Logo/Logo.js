import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classStyles from "./Logo.module.css";

const Logo = props => {
  return (
    <div className={classStyles.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
