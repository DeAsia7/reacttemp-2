import React, { useState, useEffect } from "react";


function Counter(){
  
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Counter updated: " +count);
     }, [count]);

        return (
            <div className="background-image-donutapr21.jpg">
            <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center px-4 rounded">
            <div className="bg-green-100 px-8 rounded shadow-md max-w-xl w-full text-center">
                <h1>How many donuts would you like</h1>
                <h3> Count: {count}</h3>
                <br></br>
<button onClick={() => setCount(count + 1)}>Add One!</button>
<br></br>
<button onClick={() => setCount(count - 1)}>Subtract one!</button>
</div>
            </div>
</div>
        )
}

export default Counter; 