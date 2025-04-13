import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Navbar({user, setUser}) {
    const Navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        Navigate('/login');
    }

return (
    <div >
    <nav
className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:scale-105 transition-transform">
        <ul className="text-center ">
        <li> <Link to="Home"> <span className= 'font-semibold text-red-5000 italic'> Home </span></Link></li>
        <li> <Link to="./About"> About Us</Link></li>
        <li> <Link to="./Contact"> Contact Us</Link></li>
        <li> <Link to="./Counter"> Counter</Link></li>
        <li> <Link to=".Colorchange"> Colorchange</Link></li>
        <li> <Link to="./Calculator"> Calculator</Link></li>
        
        </ul>
        { user && <button onClick={handleLogout}>Logout</button> } 
     
    </nav>
    </div>
);
};
export default Navbar;