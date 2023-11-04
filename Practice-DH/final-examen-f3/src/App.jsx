import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from 'react-router-dom';
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/globalContext";




function App() {
    const {currentTheme} = useContext(ContextGlobal);
    return (
        <div className={currentTheme}>
                <Navbar />
                <Outlet/>
                <Footer />
        </div>
    );
}

export default App;
