import React, { Component } from "react";
import ExpenseIcon from "./ExpenseIcon";


const MONTHS = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];

export default class ExpenseDetail extends Component {

  formatDate(date) {
    const dateParts = date.split("-");
    const month = MONTHS[Number(dateParts[1]) - 1];
    const day = String(Number(dateParts[2]));
    const year = dateParts[0];
    return `${month} ${day}, ${year}`;
  }

  render() {
    return (
      <li
        className="mdc-list-item"
        onClick={() => this.props.onSelect(this.props.expense)}
      >
        <ExpenseIcon category={this.props.expense.category} />
        <span className="mdc-list-item__text">
          {this.props.expense.description
            ? `${this.props.expense.description.replace(/^(.{45}).+/, "$1…")}`
            : ""}
          <span className="mdc-list-item__text__secondary">
            {this.formatDate(this.props.expense.date)}
            {` • ${this.props.expense.category}`}
          </span>
        </span>
        <span className="mdc-list-item__end-detail">
          ${this.props.expense.amount}
        </span>
      </li>
    );
  }
}
