import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';


class Carta extends Component {

  render() {
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
      <article className="contentMaster">
      <div className="imgContent">
      <img src={require(`../assets/img/${this.props.imagen.toLowerCase()}`)} class="imgInstument"></img>
      </div>
      <div className="content">
      <h5>{this.props.titulo}</h5>
      <h4>${this.props.precio}</h4>
      {envio(this.props.envio)}
      <p>{this.props.vendidos} Vendidos</p>
      <Button className="mb-5" href={'/detalleInstrumento/'+this.props.id} variant="primary">Detalle</Button>
      </div>
      </article>
    );
  }
}

export default Carta;
