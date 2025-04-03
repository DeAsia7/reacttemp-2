import React, { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
    <div>
        <h1>About us</h1>
        <p>holy molly donut shop has been around for generations and we're proud to say its made from scratch. Every morning a new batch is made and if we have any left over by the end of the day, we will try our best to hand them to someone in need.  </p>
        <p>donuts make everyone happy and its our goal to keep you happy with every bite.</p>

<button onClick={() => setShowMore(!showMore)} > { showMore ? "Show Less" : "Show More"}</button>

{showMore && (
    <p>If you see this secret message, you get a free donut! </p>
)}

    </div>
    )
}

export default About;