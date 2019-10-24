import React from "react";

import classStyles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => {
  return (
    <header className={classStyles.Toolbar}>
      <div>MENU</div>
      <div className={classStyles.Logo}>
        <Logo />
      </div>
      <nav className={classStyles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
