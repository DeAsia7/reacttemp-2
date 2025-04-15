import React, { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Menu, X} from 'lucide-react';



function Navbar({user, setUser}) {
    const Navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);


    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('loggeduser');
        Navigate('/login');
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

return (
   // <header className="w-full bg-white shadow-md sticky top-o z-50"
    <nav className=" max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
<div className=" text-pink-500 font-bold text-xl">
<Link to="/Home">MyHolyMoly</Link>
</div>

<div className="md:hidden">
    <button onClick={toggleMenu}>
        {menuOpen ? <X className="w-6 h-6"/> : <Menu className=" w-6 h-6"/>}
    </button>
</div>
        <ul className={`md: flex gap-6 items-center text-gray-700 text-lg font-medium list-none p-0 m-0
         ${menuOpen ? 'block absolute top-[64px] left-0 w-full bg-white px-6 py-4 shadow-md' : "hidden md:flex"}
        }`}>
        <li> <Link to="./Home"  className="text-blue-500" onClick={() => setMenuOpen(false)}> Home </Link></li>

        <li> <Link to="./About" className="text-yellow-500 " onClick={() => setMenuOpen(false)}> About Us</Link></li>

        <li> <Link to="./Contact"  className="text-pink-600 " onClick={() => setMenuOpen(false)}> Contact Us</Link></li>

        <li> <Link to="./Counter"  className=" text-red-500 " onClick={() => setMenuOpen(false)}> Counter</Link></li>

        <li> <Link to="./Colorchange"  className=" text-indigo-500 " onClick={() => setMenuOpen(false)}> Colorchange</Link></li>

        <li> <Link to="./Calculator"  className=" text-gray-500 " onClick={() => setMenuOpen(false)}> Calculator</Link></li>

        <li><Link to="./login" className="text-grey-500" onClick={() => setMenuOpen(false)} >logout</Link></li>



        {/*profile page,location */}
        
        </ul>
        { user && (
        <button onClick={() => {handleLogout(); setMenuOpen(false);}} >Logout</button> 
        )}
     
    </nav>
);
};
export default Navbar;