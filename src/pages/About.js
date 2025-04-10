import React, { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
    <div>
        <h1 text-align="center">  About Holy Moly Donut</h1>
        <p>holy moly donut shop has been around for generations and we're proud to say its made from scratch.  our community-Every morning a new batch is made and if we have any left over by the end of the day, we will try our best to hand them to someone in need.  </p>
        <h2>Our Goal</h2>
        <p>Donuts make everyone happy and we want to make sure you're satifised with every bite.</p>

<button onClick={() => setShowMore(!showMore)} > { showMore ? "Show Less" : "Show More"}</button>

{showMore && (
    <p>If you see this secret message, you get a free donut! </p>
)}

    </div>
    )
}

export default About;