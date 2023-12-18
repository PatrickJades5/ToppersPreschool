import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
//import './index.css';
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import store from './app/store';
import { Provider } from 'react-redux';
//import ImageZoom from "react-image-zooom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <ImageZoom /> */}
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
  </Provider>
);

