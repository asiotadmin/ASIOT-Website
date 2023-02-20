import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Homepage from './Component/Homepage';
import Contact from './Component/Contact';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import ErpNext from './Component/ErpNext';
import Footer from './Component/footer';
import "./Javascript.jsx";
import Helmet from 'react-helmet';

const App=()=>{
    return(
        
        <BrowserRouter>
         <Helmet>
          <title>App Title</title>
          <meta name="description" content="App Description" />
          <meta name="title" content="ASIOT Solutions" />
        </Helmet>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route exact path="/Contact" element={<Contact/>} />
            <Route exact path="/ErpNext" element={<ErpNext/>} />

            
        </Routes>
        <Footer/>
        </BrowserRouter>
        
    );
};
export default App;