import React from "react";

import classStyles from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={classStyles.BuildControl}>
      <div className={classStyles.Label}>{props.label}</div>
      <button className={classStyles.Less}>Less</button>
      <button className={classStyles.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
