import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classStyles from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={classStyles.CheckoutSummary}>
      <h1>We hope it tasts well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
