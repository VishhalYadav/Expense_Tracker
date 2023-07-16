import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      title: enteredExpenseData.enteredTitle,
      amount: +enteredExpenseData.enteredAmount,
      date: new Date(enteredExpenseData.enteredDate),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};

export default NewExpenses;
