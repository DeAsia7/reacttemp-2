import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Counter from '../pages/Counter'
import Colorchange from './pages/Colorchange'
import Calculator from './pages/Calculator'
import Login from './pages/login'


function App() {
  const[user, setUser] = React.useState(null);
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={user ? <Home/> : <Navigate to="/login"/>}/>
        <Route path="*" element={Naviagte to= {user ? "/home" : "/login"}}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/colorchange" element={<Colorchange/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;