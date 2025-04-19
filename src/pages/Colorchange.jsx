
import React, { useState, useEffect} from 'react';


function Colorchange (){
const [color, setColor] = useState("red");

useEffect(() => {
    const interval = setInterval(() => {
        // Change the color every 5 seconds
        setColor((previousColor) = (previousColor === 'red' ? 'blue' : 'red'));
    } , 5000);
    },[])

    return(
<div style={{backgroundColor: color, height: "100%", transition: "0.5s"}}>
    <h1>Background Color: {color}</h1>
</div>

    );

}

export default Colorchange;

