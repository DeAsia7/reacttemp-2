import React from 'react';

function CalculatorDisplay({ value }) {
  return (
    <div style={styles.display}>
        {value}
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