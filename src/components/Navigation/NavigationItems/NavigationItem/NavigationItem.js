import React from "react";

import classStyles from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className={classStyles.NavigationItem}>
      <a href={props.link} className={props.active ? classStyles.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
