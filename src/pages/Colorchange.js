import React, { useState } from "react";

function Colorchange (){
const [color, setColor] = useState("red");
const [isClicked, setIsClicked] = useState(false);

useEffect(() => {
    const interval = setInterval(() => {
        setColor((previousColor) = (previousColor === "red" ? "blue" : "red"));
    } , 1000);
    },[])

    useeffect9(() => {
        setColor((previousColor) => (previousColor === "red" ? "blue" : "red"));
    }
);
}

export default Colorchange;

