import React from "react";

import classStyles from "./Backdrop.module.css";

const Backdrop = props => {
  return props.show ? (
    <div className={classStyles.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
