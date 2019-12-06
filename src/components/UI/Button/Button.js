import React from "react";

import classStyles from "./Button.module.css";

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      className={[classStyles.Button, classStyles[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
