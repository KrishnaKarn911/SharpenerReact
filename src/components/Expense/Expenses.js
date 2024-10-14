import React, { useState } from "react";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../WrapperComponent/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleOnSelect = (selectedYears) => {
    setSelectedYear(selectedYears);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSelected={handleOnSelect} />
      <ExpensesChart chartData={filteredExpenses} />;
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
