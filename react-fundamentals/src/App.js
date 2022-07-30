import "./App.css";
import Expenses from "./Components/Expenses/Expenses";

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
      <h2>Lets get Started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
