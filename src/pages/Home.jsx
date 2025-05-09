/* a welcome message
 create click counter using useState- adds value
 a list of recent visitors
 */

 import React, { useState } from "react";


 function Home(){
    const[count, setCount] = useState(0);
    const[visitors,setVisitors] = useState (['andrea', 'adia', 'DeAsia', 'lydia', 'rebecca', 'sophia']);

const addVisitor = () => {
    //alter the value of visitirs, im going to setVisitors

    setVisitors([...visitors, `Visitor ${visitors.length + 1}`]);

}

return (
    <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center px-4 rounded">
        <div className="bg-green-100 px-8 rounded shadow-md max-w-xl w-full text-center">
        <h1 className="text-3xl text-blue-900">welcome</h1>
        <p className="text-green-500 md-8"> click the button below to increase the counter</p>
        <button onClick= {() => setCount(count + 1)} className="bg-pink-400 hover:bg-pink-500 text-black px-4 py-2 rounded-lg shadow md-6">click me </button>
        <p>you have clicked {count} times</p>

        <button onClick={addVisitor} className="bg-pink-400 hover:bg-oink-500 text-black px-4 py-2 rounded-lg shadow md-6">Register a new visitor</button>

        <h3 className="text-xl font-bold ">recent visitors</h3>

        <ul>
         {visitors.map((visitor, index) => (<li key={index}>{visitor}</li>))}
        </ul>
    </div>
    </div>
 );

 }
 export default Home;