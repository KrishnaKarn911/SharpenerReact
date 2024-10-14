import React, { useState } from "react";

import "./App.css";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

const initialExpense = [
  {
    id: "1",
    date: new Date(2024, 7, 15),
    title: "Insurance",
    price: 100,
    location: "Bangalore",
  },
  {
    id: "2",
    date: new Date(2025, 3, 25),
    title: "Book",
    price: 10,
    location: "Delhi",
  },
  {
    id: "3",
    date: new Date(2024, 10, 11),
    title: "Pen",
    price: 1,
    location: "Hyderabad",
  },
  {
    id: "4",
    date: new Date(2025, 1, 14),
    title: "Laptop",
    price: 200,
    location: "Mumbai",
  },
];

const App = () => {
  const [expense, setExpense] = useState(initialExpense);

  const handleSavedExpense = (expenseData) => {
    setExpense((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };
  return (
    <div>
      <h1>Let's get Started</h1>
      <NewExpense onSaveExpense={handleSavedExpense}></NewExpense>

      <Expenses expenses={expense}></Expenses>
    </div>
  );
};

export default App;
