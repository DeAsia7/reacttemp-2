import React from 'react';

import {Link} from 'react-router-dom';

function Navbar(){
return (
    <nav style={styles.navbar}>
        <ul style={styles.navlist}>
        <li> <Link to="Home" style={styles.link}> Home </Link></li>
        <li> <Link to="./About" style={styles.link}> About Us</Link></li>
        <li> <Link to="./Contact" style={styles.link}> Contact Us</Link></li>
        </ul>
    </nav>
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

export default Navbar