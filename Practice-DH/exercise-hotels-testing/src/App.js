
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HotelDetail from './components/HotelDetail';
import dataHotels from './hotels.json';

function App() {
  const [hotelSelected, setHotelSelected] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
      navigate("/home")
  },[])
  console.log(dataHotels);
  const handleSelectedHotel = (hotel) =>{
      console.log(hotel);
      setHotelSelected(hotel);
  } 
  return (
    <div className="container hotel_container">
      <h1>Hotels</h1>
      <Routes>
        <Route path='/home' element={<Home hotels={dataHotels} selectedHotel={handleSelectedHotel}/>}/>
        <Route path='/details/:id' element={<HotelDetail hotelSelected={hotelSelected}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
