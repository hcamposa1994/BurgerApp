import React from "react";

import classStyles from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={classStyles.BuildControl}>
      <div className={classStyles.Label}>{props.label}</div>
      <button className={classStyles.Less}>Less</button>
      <button className={classStyles.More}>More</button>
    </div>
  );
};

export default BuildControl;
