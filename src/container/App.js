import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Caption from '../components/caption'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/NavBar'
import Servicios from '../components/servicios'
import Nosotros from '../components/Nosotros'
import Estadisticas from '../components/Estadisticas'
function App() {
  return (
    <div>
      <header >
        <Caption/>
        <Navbar/>
        <Servicios/>
        <Nosotros/>
        <Estadisticas/>
      </header>
    </div>
  );
}

export default App;
