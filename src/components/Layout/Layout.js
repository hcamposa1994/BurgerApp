import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classStyles from "./Layout.module.css";

const Layout = props => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classStyles.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
