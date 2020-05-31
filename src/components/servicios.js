import React from 'react'
import './servicios.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad, faMapMarkerAlt, faChartBar} from '@fortawesome/free-solid-svg-icons'
import {Container,Row} from 'react-bootstrap'


const Servicios = () =>{
  return(
    <div className="Servicios">
      <div className="ruteo">
        <h3>Servicio de ruteo</h3>
        <p>Queremos ofrecer el mejor servicio al mejor precio</p>
      </div>
      <Container className ="ser" fluid>
        <Row className = "services" xs={1} lg={3}>
          <div className ="otro">
              <div className="box">
                <FontAwesomeIcon className="icono" icon={faRoad}/>
              </div>
              <h4>Diseña tus Rutas</h4>
              <p>Importa las direcciones de destino,
                permite que se calcule las rutas óptimas
                y luego asígnalas a tus conductores.
                Incorpora a tu ruteo límites de carga por vehículo,
                horarios en que tus clientes pueden recibirte,
                restricciones territoriales y más!</p>
          </div>
          <div className ="otro">
              <div className="box">
                <FontAwesomeIcon className="icono" icon={faMapMarkerAlt}/>
              </div>
              <h4>Monitorea en tiempo real</h4>
              <p>Podrás revisar en tiempo real la ubicación de cada uno
                de tus vehículos, sus paradas y si van a tiempo con sus entregas.
                Mediante notificaciones te enterarás si tus conductores siguieron
                la ruta óptima o si algún pedido fue rechazado.</p>
          </div>
          <div className ="otro">
              <div className="box">
                <FontAwesomeIcon className="icono" icon={faChartBar}/>
              </div>
              <h4>Revisa las estadísticas</h4>
              <p>Descubre oportunidades de mejora al monitorear los horarios y
                estados de las visitas históricas, y al revisar cuánto tiempo
                 pasaron tus vehículos en la calles y cuántos kilómetros recorrieron.
                 Accede a reportes que te facilitarán el análisis de datos y la toma de decisiones.</p>
          </div>
        </Row>
      </Container>

    </div>
  )
}

export default Servicios
