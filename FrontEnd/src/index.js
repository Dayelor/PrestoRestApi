
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  // app es el componente principal de la aplicacion
  // Provider es un componente de react-redux que permite conectar la aplicacion con el store
  // store es el objeto que contiene el estado de la aplicacion
  // el store es creado en el archivo store.js
  // el store es pasado como prop al Provider
  // el Provider es pasado como prop al App
  // el App es pasado como prop al ReactDOM.render
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
