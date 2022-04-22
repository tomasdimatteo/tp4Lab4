import React,{Component} from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Productos from './components/Productos';
import DetalleInstrumento from './components/DetalleInstrumento';
import Home from './components/Home';
import Direccion from './components/Direccion';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route path="/detalleInstrumento/:id" component={DetalleInstrumento}></Route>
      <Route path="/productos" component={Productos}></Route>
      <Route path="/direccion" component={Direccion}></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
