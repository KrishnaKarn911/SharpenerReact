// Write your code here

import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpensesDate.js";
import Card from "../WrapperComponent/Card.js";

const ExpenseItem = (props) => {
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </div>
  );
};

export default ExpenseItem;
