import React from 'react';

function CalculatorDisplay({ value }) {
  return (
    <div>
      <div>
        <h1>Lets calculate how much your donuts will be</h1>
      </div>
      <div style={styles.display}>
          {value}
      </div>
    </div>
  );
}

const styles = {
    display: {
        backgroundColor: 'orange',
        color: 'green',
        fontSize: '50px',
        padding: '10px',
        textAlign: 'right',
        marginButton: '10px',
        borderRadius: '5px',
    },
};

export default CalculatorDisplay;