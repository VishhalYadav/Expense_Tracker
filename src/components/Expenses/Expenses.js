import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const selectedYearExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onSelectedYear={yearChangeHandler}
        />
        <ExpensesChart expenses={selectedYearExpenses} />
        <ExpensesList expenses={selectedYearExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
