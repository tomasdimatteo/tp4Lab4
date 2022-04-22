import React from 'react';
import Navegacion from './Navegacion';
import Carta from './Carta';
import {instrumentos} from '../datos/instrumentos.json';

class Productos extends React.Component {
  constructor(){
    super();
    this.state = {
      instrumentos
    }
  }

  render() {
    const instrumentos = this.state.instrumentos.map((instrumento,i) => {
      return <Carta id={instrumento.id} titulo={instrumento.instrumento} vendidos={instrumento.cantidadVendida} precio={instrumento.precio} envio={instrumento.costoEnvio} imagen={instrumento.imagen} />
    })

    return (
      <div>
        <Navegacion/>
        {instrumentos}
      </div>
    );
  }
}

export default Productos;
