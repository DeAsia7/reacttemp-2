
import React, { useState, useEffect} from 'react';


function Colorchange (){
const [color, setColor] = useState("red");

useEffect(() => {
    const interval = setInterval(() => {
        setColor((previousColor) => (previousColor === 'red' ? 'blue' : 'red'));
    } , 3000);
    },[])

    return(
        <div className="min-h-screen text-center">
<div style={{backgroundColor: color, height: "800px", transition: "0.3s"}}>
    <h1 className="text-3xl ">Background Color: {color}</h1>
</div>
</div>
    );

}

export default Colorchange;

