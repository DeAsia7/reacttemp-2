import React, { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (

    <div>
        <h1>About us</h1>
        <p>holy molly donut shop</p>

<button onClick={() => setShowMore(!showMore)} > { showMore ? "Show Less" : "Show More"}</button>

{showMore && (
    <p>donuts</p>
)}

    </div>
    )
}

export default About;