import React from 'react'
import './caption.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
const Caption = () =>{
  return(
    <div className="Elemento">
      <div className="Caption">
        <div className="h1" >
          <h1>BIENVENIDO A <span>Daniel es Severa Loquita</span></h1>
        </div>
        <div className ="sub">
        <p>SERVICIO DE RUTEO DE VEHÍCULOS AL MEJOR PRECIO</p>
        </div>
          <div className="button">
            <Button variant='outline-secondary'>Comencemos</Button>
          </div>
        <div className = "box-animate">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  )
}

export default Caption
