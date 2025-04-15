import React, { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
    <div>
        <h1 className="text-3xl mb-4">  About Holy Moly Donut</h1>
        <p >holy moly donut shop has been around for generations and we're proud to say its made from scratch. </p>
        <p> our community-Every morning a new batch is made and if we have any left over by the end of the day, we will try our best to hand them to someone in need.  </p>
        <h1 className="text-2xl mb-4">Our Goal</h1>
        <p>Donuts make everyone happy and we want to make sure you're satifised with every bite.</p>

<button onClick={() => setShowMore(!showMore)}       > { showMore ? "Show Less" : "Mystery Button"}</button>

{showMore && (
    <p>If you see this secret message, you get a free donut! </p>
)}

    </div>
    )
}

export default About;