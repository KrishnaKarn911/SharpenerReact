import "./App.css";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

const App = () => {
  return (
    <div>
      <h1>Let's get Started</h1>
      <NewExpense></NewExpense>
      <Expenses></Expenses>
    </div>
  );
};

export default App;
