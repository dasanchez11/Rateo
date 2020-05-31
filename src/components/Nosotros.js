import React from 'react'
import './Nosotros.css'
import {ProgressBar,Container,Row,Col} from 'react-bootstrap'

const Nosotros = () => {
  return(
    <Container fluid className="contenedor-nosotros">

      <Row xs={1} md ={2} lg={2} className="contenido-nos">
          <Col className="abou-us">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="nosotros">NOSOTROS</h1>
            <p>Somos un Start Up que busca ser la compañía
               pionera en el ruteo de vehículos en Colombia.
              Nuestro objetivo principal es averiguar las rutas
              de una flota de transporte para dar servicio a unos
              clientes y minimizar el coste total de operación, minimizar
              el tiempo total de transporte, minimizar la distancia
              total recorrida, minimizar el tiempo de espera,
              maximizar el beneficio, maximizar el servicio al cliente,
              minimizar la utilización de vehículos, equilibrar la utilización
              de los recursos, etc.
            </p>
            <br/>
            <p>Nuestro equipo de trabajo está conformado por ingenieros de la Universidad de los Andes.</p>
          </Col>
          <Col className="barra-progreso">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className="UserExp">
                <h6>Esperiencia de usuarios</h6>
                <ProgressBar  now={75} label={`${75}%`}/>
              </div>
              <div className="web-design">
                <h6>Diseño página web</h6>
                <ProgressBar now={70} label={`${70}%`}/>
              </div>
              <div className="programming">
                <h6>Programación</h6>
                <ProgressBar now={80} label={`${80}%`}/>
              </div>
              <div className="Optimization">
                <h6>Optimización</h6>
                <ProgressBar now={90} label={`${90}%`}/>
              </div>
          </Col>
      </Row>
    </Container>
  )
}

export default Nosotros
