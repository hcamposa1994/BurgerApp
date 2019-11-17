import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classStyles from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      Zipcode: ""
    }
  };
  render() {
    return (
      <div className={classStyles.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className={classStyles.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classStyles.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classStyles.Input}
            type="text"
            name="street"
            placeholder="123 street"
          />
          <input
            className={classStyles.Input}
            type="text"
            name="zipcode"
            placeholder="Zip Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
