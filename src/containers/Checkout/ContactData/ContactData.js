import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classStyles from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      Zipcode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingred,
      price: this.props.money,
      customer: {
        name: "Herbert Campos",
        address: {
          street: "Test ave",
          zipCode: "97071",
          country: "USA"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
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
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classStyles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
