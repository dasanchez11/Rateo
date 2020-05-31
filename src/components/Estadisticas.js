import React from 'react'
import './Estadisticas.css'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faDesktop,faCar,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'


const Estadisticas = () => {
  return(
    <Container fluid className="contenedor-estadisticas">
      <br/>
      <h1>Estadísticas</h1>
      <br/><br/><br/><br/>
          <Row lg={4} xs={2} md={2} className="statistics">
              <Col className="sat-clients">
                <FontAwesomeIcon className="icono" icon={faUser}/>
                <p>4000</p>
                <h6>Clientes Satisfechos</h6>
              </Col>
              <Col className="ruteos">
                <FontAwesomeIcon className="icono" icon={faDesktop}/>
                <p>200</p>
                <h6>Ruteos por hora</h6>
              </Col>
              <Col className="available-vehicles">
                <FontAwesomeIcon className="icono" icon={faCar}/>
                <p>56</p>
                <h6>Vehículos Disponibles</h6>
              </Col>
              <Col className="cities">
                <FontAwesomeIcon className="icono" icon={faMapMarkerAlt}/>
                <p>24</p>
                <h6>Cobertura en ciudades</h6>
              </Col>
          </Row>
    </Container>
  )
}

export default Estadisticas
