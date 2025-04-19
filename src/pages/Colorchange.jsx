
import React, { useState, useEffect} from 'react';


function Colorchange (){
const [color, setColor] = useState("red");

useEffect(() => {
    const interval = setInterval(() => {
        setColor((previousColor) => (previousColor === 'red' ? 'blue' : 'red'));
    } , 3000);
    },[])

    return(
<div style={{backgroundColor: color, height: "100%", transition: "0.3s"}}>
    <h1>Background Color: {color}</h1>
</div>

    );

}

export default Colorchange;

