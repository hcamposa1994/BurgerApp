import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classStyles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let attachedClasses = [classStyles.SideDrawer, classStyles.Close];
  if (props.open) {
    attachedClasses = [classStyles.SideDrawer, classStyles.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classStyles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
