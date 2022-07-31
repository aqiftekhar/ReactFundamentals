import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const enableEditingHandler = () => {
    setEditing(true);
  };
  const disableEditingHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={enableEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel = {disableEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
