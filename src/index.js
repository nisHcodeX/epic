import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import reportWebVitals from './reportWebVitals';
import store, { history } from './redux/store';

import './index.css';
import App from './App';
import Dashboard from './dashboard/dashboard.component';
import Login from './auth/auth.component';


ReactDOM.render(
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>,
    </ConnectedRouter>
  </Provider >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
