import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.price}
            location={item.location}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
