import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    title: "New Desk (wooden)",
    amount: 450,
    date: new Date(2019, 8, 9),
  },
  {
    title: "New Chair (wooden)",
    amount: 200,
    date: new Date(2020, 3, 15),
  },
  {
    title: "Iron Board",
    amount: 200,
    date: new Date(2020, 1, 22),
  },
  {
    title: "Cloths",
    amount: 240,
    date: new Date(2021, 11, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const expenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={expenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
