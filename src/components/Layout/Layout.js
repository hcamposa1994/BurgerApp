import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classStyles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Auxiliary>
    <Toolbar />
    <main className={classStyles.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
