import React from "react";

import classStyles from "./Input.module.css";

const Input = props => {
  let inputElement = null;
  const inputClasses = [classStyles.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classStyles.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = (
      <p className={classStyles.ValidationError}>{props.errorMessage}</p>
    );
  }

  return (
    <div className={classStyles.Input}>
      <label className={classStyles.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
