import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store'
import App from './App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute'
import Nav from './components/Nav';
import Category from './components/category/Category';
import Business from './components/business/Business';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Nav />
    <Switch>
      <Route exact path='/' component={Login} />
      <Route   path="/app" component={App} />
      <ProtectedRoute  path="/dashboard" component={Dashboard} />
      <ProtectedRoute  path="/add-category" component={Category} />
      <ProtectedRoute  path="/add-business" component={Business} />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
