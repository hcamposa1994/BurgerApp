import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classStyles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className={classStyles.Content}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
