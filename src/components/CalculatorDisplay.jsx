import React from 'react';

function CalculatorDisplay({ value }) {
  return (
    <div>
      <div>
        <h1 className="text-green-300 text-3xl text-center ">Lets calculate how much your donuts will be</h1>
      </div>
      <div className=" text-xl flex w-60px h-60px rounded-md justify-center ">
          {value}
      </div>
    </div>
  );
};
export default CalculatorDisplay;