import React from 'react';

function CalculatorDisplay({ value }) {
  return (
    <div style={StyleSheet.display}>
        {value}
    </div>
   
  );
}

const styles = {
    display: {
        backgroundColor: 'white',
        color: 'green',
        fontSize: '20%',
        padding: '10px',
        textAlign: 'right',
        marginButton: '10px',
        borderRadius: '5px',
    },
};

export default CalculatorDisplay;