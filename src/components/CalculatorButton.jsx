import React from 'react';

function CalculatorButton({ label, onClick }) {

  return (
    <div>
    <button style={styles.button} onClick={() => onClick(label)}>{label}</button>
    </div>
  );
};



const styles = {
  button: {
   fontSize: '15px',
   padding: '10px',
   marginTop: '10px',
   margin: '5px',
   width: '90px',
   height:'60px',
   borderRadius: '60px', 
   border: 'none',
   backgroundColor: 'blue',
   color: 'white',
 
  }

 };

export default CalculatorButton;

