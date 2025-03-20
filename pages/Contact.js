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
}
return ( 
    <div>
<h1>Contact Us</h1>


{submitted ? (<div>
    <h2>Thank you for contacting us {Name}!</h2>
    <p>We will get back to you shortly. Please keep an eye on your inbox at {email} </p>
    <button onClick={() => setSubmitte(false)}> Send another message</button>
</div>) : (
<form onSubmit={handleSubmit}>

<div>
    <label>Name</label>
    <input type = "text" value= {Name} onChange= {(e)=> setName(e.target.value)} required/>
</div>

<div>
    <label>Email</label>
    <input type = "text" value= {email} onChange= {(e)=> setEmail(e.target.value)} required/>
</div>

<div>
    <label>Message</label>
    <input type = "textarea" value= {message} onChange= {(e)=> setMessage(e.target.value)} required/>
</div>

<button type='submit'>Send Message</button>

</form>

)}
</div>
);


export default Contact;