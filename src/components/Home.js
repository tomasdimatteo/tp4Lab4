import React from 'react';
import Navegacion from './Navegacion';


class Home extends React.Component {

  render() {
    return (
      <div>
        <Navegacion/>
        <div className="home">
        <h1>Musical Hendrix</h1>
        <p>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el
        conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</p>
      </div>
      </div>
    );
  }
}

export default Home;
