import React, { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Counter updated: " +count);
     }, [count]);

        return (
            <div>
                <h2> Count: {count}</h2>
<button onClick={() => setCount(count + 1)}>Add One!</button>
<button onClick={() => setCount(count - 1)}>Subtract one!</button>

            </div>

)
}

export default Counter; 