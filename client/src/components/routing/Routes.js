import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from '../../pages/dashboard/Dashboard';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const Routes = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Switch>
                <Route exact path="/app/dashboard" component={Dashboard} />
            </Switch>
        </>
    );
};

export default withRouter(Routes);
