import React, {useState, useEffect } from 'react';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorDisplay from '../components/CalculatorDisplay';
//import { set } from 'lodash';

function Calculator() {

const [input, setInput] = useState("");
const [result, setResult] = useState(null);

useEffect(() => {
    const savedResult = localStorage.getItem("lastResult");
    if (savedResult) setResult(savedResult);

},[]);

useEffect(() => {
    if (result != null) {
        localStorage.setItem("lastResult", result);
    }
}, [result]);

const handleClick = (value) => { 
    if(value === "=") {
       try{
        const evalResult = eval(input);
        setResult(evalResult);
        setInput(evalResult.toString());

       } catch (error) {
           setResult("ERROR");
       }
    } else if(value === "C") {
        setInput("");
        setResult(null);

    } else {
        setInput(input + value);

    }
};

return(
    <div style={styles.container}>
        <CalculatorDisplay value={input || result || "0" }  />

        <div style={styles.buttonGrid}>
        
                {["7", "8", "9", "/"].map((labelItem) => ( 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                ))}
                  {["4", "5", "6", "*"].map((labelItem) => (
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                ))}
                  {["1", "2", "3", "-"].map((labelItem) => ( 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                ))}
                  {["0", ".", "+", "="].map((labelItem) => ( 
                    <CalculatorButton Key={labelItem} label={labelItem} onClick={handleClick} /> 
                ))}
                <CalculatorButton Key="C" label="C" onClick={handleClick} />
        </div>
        </div>
);
}

const styles = {
    container:{
        width: ' 600,px',
        margin: '50px auto',
        padding: '10px',
        borderRadius: ' 10px',
        backgroundColor: 'purple',
        textAlign: 'center',
    },
    buttonGrid:{
        display:'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '10px',
    }
}


export default Calculator;