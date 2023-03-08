import React from 'react';
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Homepage from './Component/Homepage';
import Contact from './Component/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import ErpNext from './Component/ErpNext';
import ErpNextHealthcare from './Component/ErpNext-Healthcare';
import ErpNextLMS from './Component/ErpNext-LMS';
import ErpNextManufacturing from './Component/ErpNext-Manufacturing';
import ErpNextRetail from './Component/ErpNext-Retail';
import Footer from './Component/footer';
import "./Javascript.jsx";
import Helmet from 'react-helmet';

const App = () => {
    return (

        <BrowserRouter>
            <Helmet>
                <title>App Title</title>
                <meta name="description" content="App Description" />
                <meta name="title" content="ASIOT Solutions" />
            </Helmet>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/ErpNext" element={<ErpNext />} />
                <Route exact path="/ErpNextHealthcare" element={<ErpNextHealthcare />} />
                <Route exact path="/ErpNextLMS" element={<ErpNextLMS />} />
                <Route exact path="/ErpNextManufacturing" element={<ErpNextManufacturing />} />
                <Route exact path="/ErpNextRetail" element={<ErpNextRetail />} />

            </Routes>
            <Footer />
        </BrowserRouter>

    );
};
export default App;