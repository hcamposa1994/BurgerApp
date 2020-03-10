import React from "react";

import classStyles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
// import Button from "../../UI/Button/Button";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => {
  return (
    <header className={classStyles.Toolbar}>
      {/* <Button clicked={props.drawerToggleClicked}>MENU</Button> */}
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classStyles.Logo}>
        <Logo />
      </div>
      <nav className={classStyles.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default Toolbar;
