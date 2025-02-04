import React, { Component } from 'react';

export default class ExpenseIcon extends Component {
  
  // https://material-ui.com/components/material-icons/
  iconFrom(category) {
    switch (category) {
      case "Groceries":
        return "local_grocery_store";
      case "Restaurants":
        return "local_dining";
      case "Car":
        return "directions_car";
      case "Hobbies":
        return "local_library";
      case "Household":
        return "home";
      case "Shopping":
        return "local_mall";
      case "Health":
        return "local_hospital";
      case "Entertainment":
        return "movie_filter";
      case "Transport":
        return "directions_bus";
      case "Travel":
        return "flight_takeoff";
      case "Online Subscriptions": 
        return "computer";
      // case "Clothing":
      //   return "add_shopping_cart_icon";
      default:
        return "attach_money";
    }
  }

  render() {
    return (
      <span
        className={`mdc-list-item__start-detail ${this.props.category}`}
        role="presentation"
      >
        <i className="material-icons" aria-hidden="true">
          {this.iconFrom(this.props.category)}
        </i>
      </span>
    );
  }
}
