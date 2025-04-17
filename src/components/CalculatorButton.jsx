import React from 'react';

function CalculatorButton({ label, onClick }) {
  return (
    <div>
    <button onClick={() => onClick(label)}>{label}</button>
    </div>
  );
};

export default CalculatorButton;