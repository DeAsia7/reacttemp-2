import React, { useState } from "react";

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
       
    <div className="grid grid-cols-3 divide-x divide-green-500 min-h-screen">
       
        <div><h1 className="text-3xl mb-4">  About Us</h1>
        <p >holy moly donut shop has been around for generations and we're proud to say its made from scratch. </p>
        </div>
        <div><h1 className="text-3xl mb-4"> Our Community </h1>
        <p> Every morning a new batch is made and if we have any left over by the end of the day, we will try our best to hand them to someone in need.  </p>
        </div>
       <div><h1 className="text-2xl mb-4">Our Mission</h1>
        <p> We want to ensure with every bite you take, you're satifised!</p>
</div>
       {/* <video width="320" height="240" autoplay muted>
        <source src="https://youtu.be/anztA2il5oo?si=GtSo8UwAnn9aNFfq" type="video/mp4" />
        Your browser does not support the video tag.
        </video> */}

        
<div >
<button onClick={() => setShowMore(!showMore)}  className=" bg-indigo-900 text-white p-2 rounded hover:bg-green-900 " > { showMore ? "Show Less" : "Mystery Button"}</button>

{showMore && (
    <p>If you see this secret message, you get a free donut! </p>
)}

</div>
    </div>
  )  };

export default About;