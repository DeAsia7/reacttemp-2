import React from 'react';

function CalculatorButton({ label, onClick }) {
  return (
    <div className="text-white">
    <button className="p-2 grid grid-col-3 " onClick={() => onClick(label)}>{label}</button>
    </div>
  );
};

export default CalculatorButton;