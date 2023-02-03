import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Homepage from './Component/Homepage';
import Contact from './Component/Contact';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Footer from './Component/footer';
import "./Javascript.jsx";

const App=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route exact path="/Contact" element={<Contact/>} />
         
        </Routes>
        <Footer/>
        </BrowserRouter>
    );
};
export default App;