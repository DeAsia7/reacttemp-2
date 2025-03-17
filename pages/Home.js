/* a welcome message
 create click counter using useState- adds value
 a list of recent visitors
 */

 import react, { useState } from "react";


 function Home(){
    const[count, setCount] = useState(0);
    const[visitors,setVisitors] = useState (['andrea', 'adia', 'DeAsia', 'lydia', 'rebecca', 'sophia']);

const addVisitor = () => {
    //alter the value of visitirs, im going to setVisitors

    setVisitors([...visitors, 'Visitor ${visitors.length + 1}']);

}

return (
    <div>
        <h1>welcome</h1>
        <p> click the button below to increase the counter</p>
        <button onClick= {() => setCount(count + 1)}>click me </button>
        <p>you have clicked {count} times</p>

        <button onClick={addVisitor}></button>

        <h3>recent visitors</h3>

        <ul>
         {visitors.map((visitor, index) => (<li key={index}>{visitor}</li>))}
        </ul>
    </div>
 );

 }
 export default Home;