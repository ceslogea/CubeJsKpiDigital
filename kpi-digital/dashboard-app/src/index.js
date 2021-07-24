import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import App from './App';
import { PrivateRoute } from './components/PrivateRoute';

ReactDOM.render(
  <Router>
    <App>
      <PrivateRoute key="index" exact path="/" component={DashboardPage} />
      <PrivateRoute key="explore" path="/explore" component={ExplorePage} />
      <Route key="login" path="/login" component={LoginPage} />
    </App>
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
