import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      title: "New Desk (wooden)",
      amount: 450,
      date: new Date(2022, 5, 9),
    },
    {
      title: "New Chair (wooden)",
      amount: 200,
      date: new Date(2022, 5, 15),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
