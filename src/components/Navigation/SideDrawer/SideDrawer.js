import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classStyles from "./SideDrawer.module.css";

const SideDrawer = props => {
  return (
    <div className={classStyles.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
