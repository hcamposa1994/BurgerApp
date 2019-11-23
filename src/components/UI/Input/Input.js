import React from "react";

import classStyles from "./Input.module.css";

const Input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={classStyles.InputElement} {...props} />;
      break;
    case "textarea":
      inputElement = (
        <textarea className={classStyles.InputElement} {...props} />
      );
      break;
    default:
      inputElement = <input className={classStyles.InputElement} {...props} />;
  }

  return (
    <div className={classStyles.Input}>
      <label className={classStyles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
