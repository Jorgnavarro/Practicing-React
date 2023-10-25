
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HotelDetail from './components/HotelDetail';
import dataHotels from './hotels.json';

function App() {
  const [hotelSelected, setHotelSelected] = useState({});
  console.log(dataHotels);
  const handleSelectedHotel = (hotel) =>{
      console.log(hotel);
  } 
  return (
    <div className="container hotel_container">
      <h1>Hotels</h1>
      <Routes>
        <Route path='/home' element={<Home hotels={dataHotels} selectedHotel={handleSelectedHotel}/>}/>
        <Route path='/details/:id' element={<HotelDetail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
