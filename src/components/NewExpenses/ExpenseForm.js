import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const [expenseFormHidden, setExpenseFormHidden] = useState(false);

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = userInput;
    props.onSaveExpenseData(expenseData);

    setUserInput(() => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
    setExpenseFormHidden(false);
  };

  const clickHandlerSubmit = () => {
    setExpenseFormHidden(true);
  };

  const clickHandlerCancel = () => {
    setExpenseFormHidden(false);
  };
  const submitBtnJsx = (
    <button type="submit" onClick={clickHandlerSubmit}>
      Add Expense
    </button>
  );

  if (!expenseFormHidden) {
    return submitBtnJsx;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {expenseFormHidden && submitBtnJsx}
        <button onClick={clickHandlerCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
