import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Login from '../../pages/login/Login';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Routes;
