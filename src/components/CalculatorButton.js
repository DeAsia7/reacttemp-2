import React from 'react';

function CalculatorButton({ label, onClick }) {
  return (
    <div>
    <button style={StyleSheet.button} onClick={() => onClick(label)}>{label}</button>
    </div>
  );
}

const styles = {
button: {
    fontSize:"15px",
    padding:"10px",
    margin:"5px",
    width:"60px",
    height:"60px",
    borderRadius:"5px",
    border: "none",
     backgroundColor: "lightgray",
     color: "black",
},

}

export default CalculatorButton;