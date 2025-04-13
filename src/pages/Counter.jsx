import React, { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Counter updated: " +count);
     }, [count]);

        return (
            <div>
                <h1>How many donuts would you like</h1>
                <h3> Count: {count}</h3>
<button onClick={() => setCount(count + 1)}>Add One!</button>
<button onClick={() => setCount(count - 1)}>Subtract one!</button>

            </div>

)
}

export default Counter; 