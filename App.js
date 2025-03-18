import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/colorchange" element={<Colorchange/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;