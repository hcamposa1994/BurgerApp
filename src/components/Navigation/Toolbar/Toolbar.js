import React from "react";

import classStyles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar = props => {
  return (
    <header className={classStyles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
