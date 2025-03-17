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

<form onSubmit={handleSubmit}>

<div>
    <label>Name</label>
    <input type = "text" value= {name} onChange= {(e)=> setName(e.target.value)}required/>
</div>

<div>
    <label>Email</label>
    <input type = "text" value= {email} onChange= {(e)=> setEmail(e.target.value)}required/>
</div>

<div>
    <label>Message</label>
    <input type = "textarea" value= {message} onChange= {(e)=> setMessage(e.target.value)}required/>
</div>

<button type='submit'>Send Message</button>

</form>
    </div>
)