import React from 'react';

import {Link, useNavigate} from 'react-router-dom';

function Navbar( { user, setUser }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    }
    
return (
    <div className= "flex justify-center items-center bg-gray-100">
    <nav style={styles.navbar}>
        <ul style={styles.navlist}>
        <li> <Link to="Home" style={styles.link}> <span className= 'font-semibold text-red-5000 italic'> Home </span></Link></li>
        <li> <Link to="./About" style={styles.link}> About Us</Link></li>
        <li> <Link to="./Contact" style={styles.link}> Contact Us</Link></li>
        <li> <Link to="./Counter" style={styles.link}> Counter</Link></li>
        <li> <link to=".Colorchange" style={styles.link}> Colorchange</link></li>
        <li> <Link to="./Calculator" style={styles.link}> Calculator</Link></li>
        
        </ul>
        { user && <button onClick={handleLogout}>Logout</button> } 
     
    </nav>
    </div>
);

}

const styles = {
    navbar: {
        backgroundColor: "purple",
        padding: "10px"
    }, 
    navlist: {
        liststyle: "none",
        display: "flex",
        justifyContent: "space-around",
        passing: "0",
    },
    link:{
        color: "white",
        fontSize: "20px",
    },
};

export default Navbar;