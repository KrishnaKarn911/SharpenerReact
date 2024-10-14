import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredTitle: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredAmount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredDate: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      date: new Date(userInput.enteredDate),
      price: userInput.enteredAmount,
    };
    props.onSaveExpense(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            value={userInput.enteredTitle}
            id="title"
            type="text"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            value={userInput.enteredAmount}
            id="amount"
            type="number"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2023-01-01"
            max="2024-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>{" "}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
