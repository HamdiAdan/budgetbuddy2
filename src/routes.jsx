import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import BudgetCard from './BudgetCard';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" component={BudgetCard} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default AppRoutes;
