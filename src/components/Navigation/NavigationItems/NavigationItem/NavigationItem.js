import React from "react";
import { NavLink } from "react-router-dom";

import classStyles from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className={classStyles.NavigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classStyles.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
