import React, {useState} from  'react'; 

function Contact(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
}


return ( 
    <div 
    className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 rounded">
    
<h1 className="text-3xl font-bold text-center">𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖀𝖘✍</h1>


{submitted ? (
    <div>
    <h2>Thank you for contacting us {name}!</h2>
    <p>We will get back to you shortly. Please keep an eye on your inbox at {email} </p>
    <button onClick={() => setSubmitted(false)}> Send another message</button>
</div>) : (

<form onSubmit={handleSubmit}>



    <label>Name</label>
    <input  type = "text" value= {name} onChange= {(e)=> setName(e.target.value)} required/>
<br></br>

    <label>Email</label>
    <input type = "text" value= {email} onChange= {(e)=> setEmail(e.target.value)} required/>
<br></br>

    <label>Message</label>
    <input type = "textarea" value= {message} onChange= {(e)=> setMessage(e.target.value)} required/>

<br></br>

<button type='submit'>Send Message</button>


</form>

)}
</div>
);
}

export default Contact;