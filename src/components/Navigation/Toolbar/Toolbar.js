import React from "react";

import classStyles from "./Toolbar.module.css";

const Toolbar = props => {
  return (
    <header className={classStyles.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
