import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSavedExpense = (expenseDataSaved) => {
    const expenseData = { ...expenseDataSaved, id: Math.random().toString() };
    props.onSaveExpense(expenseData);
    setIsFormVisible(false); // Hide form after submitting
  };

  const handleAddExpenseClick = () => {
    setIsFormVisible(true); // Show form when Add Expense button is clicked
  };

  const handleCancelClick = () => {
    setIsFormVisible(false); // Hide form when Cancel is clicked
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button onClick={handleAddExpenseClick}>Add Expense</button>
      )}

      {isFormVisible && (
        <ExpenseForm
          onSaveExpense={handleSavedExpense}
          onCancel={handleCancelClick} // Pass cancel handler to the form
        />
      )}
    </div>
  );
};

export default NewExpense;
