import React, {useState, useEffect } from 'react';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorDisplay from '../components/CalculatorDisplay';

function Calculator() {

const [input, setInput] = useState("");
const [result, setResult] = useState(null);

const handleClick = (value) => {};

return(
    <div style={StyleSheet.container}>
        <CalculatorDisplay value={input || result || "0" }  />

        <div
            style={ StyleSheet.buttonGrid} >
                {["7", "8", "9", "/"].map((labelItem) => { 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                })}
                  {["4", "5", "6", "*"].map((labelItem) => { 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                })}
                  {["1", "2", "3", "-"].map((labelItem) => { 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                })}
                  {["0", ".", "+", "+"].map((labelItem) => { 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                })}
        </div>
        </div>
);
}


const styles = {
    container: {
        width: "300px",
        margin: "50px auto",
        padding
    }
}





export default Calculator;