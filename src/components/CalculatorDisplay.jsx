import React from 'react';


function CalculatorDisplay({ value }) {
  return (
    <div >
      <div>
        <h1 className="text-green-300 text-4xl text-center">Lets calculate how much your donuts will be</h1>
      </div>
      <div style={styles.display}>
          {value}
      </div>
      <br></br>
    </div>
  );
}
const styles = {
  display: {
    backgroundColor: 'grey',
    color: 'black',
    fontSize: '50px',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '10px',
    borderRadius: '10px',
  }
}

export default CalculatorDisplay;

