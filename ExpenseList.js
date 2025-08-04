import React from 'react';
import Receipt from './Receipt';
import './ExpenseList.css';

const mockExpenses = [
  { id: 'e1', title: 'Toll on I‑10', amount: 4.50, date: new Date() }
];

function ExpenseList() {
  return (
    <div className="expense-list">
      {mockExpenses.map(exp => (
        <Receipt key={exp.id} expense={exp} />
      ))}
    </div>
  );
}

export default ExpenseList;
