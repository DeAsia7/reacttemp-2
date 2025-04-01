import React, { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
    <div>
        <h1>About us</h1>
        <p>holy molly donut shop</p>

<button onClick={() => setShowMore(!showMore)} > { showMore ? "Show Less" : "Show More"}</button>

{showMore && (
    <p>donuts make everyone happy and its our goal to keep you happy with every bite.</p>
)}

    </div>
    )
}

export default About;