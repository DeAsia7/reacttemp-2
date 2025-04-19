import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './pages/Counter'
import Colorchange from './pages/Colorchange'
import Calculator from './pages/Calculator'
import Login from './pages/login'
import Register from './pages/Register'
//import {LockKeyhole} from 'lucide-react';


function App() {
  const[user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('loggeduser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <Router>
    
        <Navbar user={user} setUser={setUser}/>
        <div>
      <Routes>
        <Route path="login" element={<Login setUser={setUser}/>} />

        <Route path="/register" element={<Register />} /> 

        <Route path="/Home" element={ user ? <Home/> : <Navigate to ="/login" />}/>

        <Route path="*" element={<Navigate to= { user ? "/home" : "login" } />} />

        <Route path="/About" element={ user ?  <About/> : <Navigate to ="/login" />}/>

        <Route path="/contact" element={  user ? <Contact/> : <Navigate to ="/login" />}/>

        <Route path="/counter" element={  user ? <Counter/> : <Navigate to ="/login" />}/>

        <Route path="/colorchange" element={ user ? <Colorchange/> : <Navigate to ="/login" />}/>

        <Route path="/calculator" element={ user ? <Calculator/> : <Navigate to ="/login" />}/> 

        <Route path="/location" element={ user ? <Location/> : <Navigate to ="/login" />}/>

      
      </Routes>
      </div>
     
      <Footer/>
    </Router>
  )
}

export default App;