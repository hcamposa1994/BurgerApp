import React from "react";

import classStyles from "./DrawerToggle.module.css";

const DrawerToggle = props => {
  return (
    <div className={classStyles.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
