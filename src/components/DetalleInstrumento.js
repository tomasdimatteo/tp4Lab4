import React from 'react';
import Navegacion from './Navegacion';
import Button from 'react-bootstrap/Button';
import {instrumentos} from '../datos/instrumentos.json';

class DetalleInstrumento extends React.Component {
  constructor(){
    super();
    this.state = {
      instrumentos
    }
  }
  render() {
      const id = this.props.match.params.id;
      var instrumentoElegido = instrumentos.filter(instrumento => instrumento.id == this.props.match.params.id );
        function envio(envio){
          if (envio == "G") {
            return (
            <p className="gratis"><img src={require('../assets/img/camion.png')} ></img>Envio gratis a todo el pais</p>)
          }else{
            return (
            <p className="pago">Costo de Envio Interior de Argentina: ${envio}</p>)
          }
        }
    return (
      <div>
        <Navegacion/>
        <div className="detailInstrument">
          <div className="imgDescript">
           <img src={require(`../assets/img/${instrumentoElegido[0].imagen}`)}></img>
           <p>Descripcion:</p>
           <p>{instrumentoElegido[0].descripcion}</p>
          </div>
          <div className="propInstrument">
            <p>{instrumentoElegido[0].cantidadVendida} vendidos</p>
            <h4>{instrumentoElegido[0].instrumento}</h4>
            <h2>${instrumentoElegido[0].precio}</h2>
            <p>Marca: {instrumentoElegido[0].marca}
            <br></br>
            Modelo: {instrumentoElegido[0].modelo}
            </p>
            <p>Costo Envio:</p>
            {envio(instrumentoElegido[0].costoEnvio)}
            <Button className="mt-5" variant="outline-primary" size="lg">Agregar al Carrito</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DetalleInstrumento;
