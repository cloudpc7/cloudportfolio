import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

