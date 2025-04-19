import React from 'react';

function CalculatorDisplay({ value }) {
  return (
    <div>
      <div>
        <h1 className="text-green-300 text-3xl text-center ">Lets calculate how much your donuts will be</h1>
      </div>
      <div className="flex-col flex text-2xl items-center text-white">
          {value}
      </div>
      <br></br>
    </div>
  );
};
export default CalculatorDisplay;