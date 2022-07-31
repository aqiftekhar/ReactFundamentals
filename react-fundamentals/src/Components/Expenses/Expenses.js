import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");

  const filterExpenses = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterExpenses} />
      {props.items.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      /> */}
    </Card>
  );
};

export default Expenses;
