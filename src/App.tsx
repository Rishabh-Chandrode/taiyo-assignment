import React from 'react';
import './App.css';
import Home from './Layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import MapsAndCharts from './components/MapsAndCharts';
import ContactForm from './components/ContactForm';
import Map from './components/Map';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Contacts />} />
          <Route path='contactform/:id' element = {<ContactForm/>}/>
          <Route path="contacts" element={<Contacts />} />
          <Route path="mapsandcharts" element={<MapsAndCharts/>} />
          <Route path="temp" element={<Map/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
