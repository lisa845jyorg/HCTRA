import React from 'react';
import './Receipt.css';

function Receipt({ expense }) {
  return (
    <div className="receipt">
      <div className="info">
        <strong>{expense.title}</strong>
        <div>${expense.amount.toFixed(2)}</div>
      </div>
      <div>{expense.date.toDateString()}</div>
    </div>
  );
}

export default Receipt;
