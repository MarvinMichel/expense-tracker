import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDahsboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={ history }>
    <React.Fragment>
      <Switch>
        <PublicRoute path="/" exact={ true } component={ LoginPage } />
        <PrivateRoute path="/dashboard" component={ ExpenseDashboardPage } />
        <PrivateRoute path="/create" component={ AddExpensePage } />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
