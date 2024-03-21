import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import NavBar from './Navbar';
import BNavBar from './BNavBar';
import Productpage from './Productpage';

function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Productpage" element={<Productpage/>} />
      <Route path="*" element={<NotFound/>} />        
    </Routes>
    </BrowserRouter>
    </div>
    <BNavBar/>
    </>
  );
}

export default App;