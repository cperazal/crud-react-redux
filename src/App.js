import React from "react";
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Productos from "./components/Productos";
import ProductoNuevo from "./components/ProductoNuevo";
import ProductoEditar from "./components/ProductoEditar";
//Redux
import {Provider} from 'react-redux';
import store from "./store";



function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
      <div className="container pt-5">
          <Switch>
              <Route exact path = "/" component={Productos}/>
              <Route exact path = "/productos/nuevo" component={ProductoNuevo}/>
              <Route exact path = "/productos/editar/:id" component={ProductoEditar}/>
          </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
