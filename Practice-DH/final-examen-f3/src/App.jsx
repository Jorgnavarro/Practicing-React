import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from './Routes/Favs'



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/dentist/:id" element={<Detail/>}/>
              <Route path="/contact" element={ <Contact/>}/>
              <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
