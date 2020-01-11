import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// styles
import useStyles from './styles';

// components
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { Hidden } from '@material-ui/core';

// pages
import Dashboard from '../../pages/dashboard/Dashboard';
import Transactions from '../../pages/transactions/Transactions';
import LinkedAccounts from '../../pages/linked-accounts/LinkedAccounts';
import Settings from '../../pages/settings/Settings';
import MyAccount from '../../pages/my-account/MyAccount';
import Support from '../../pages/support/Support';
import FAQ from '../../pages/faq/FAQ';

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <>
                <Header />
                <Sidebar />
                <div className={classes.contentShift}>
                    <Switch>
                        <Route path="/app/dashboard" component={Dashboard} />
                        <Route
                            path="/app/transactions"
                            component={Transactions}
                        />
                        <Route
                            path="/app/linked-accounts"
                            component={LinkedAccounts}
                        />
                        <Route path="/app/settings" component={Settings} />
                        <Route path="/app/account" component={MyAccount} />
                        <Route path="/app/support" component={Support} />
                        <Route path="/app/faq" component={FAQ} />
                    </Switch>
                </div>
            </>
        </div>
    );
};

Layout.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isSidebarOpen: state.sidebar.isSidebarOpen
});

export default compose(withRouter, connect(mapStateToProps))(Layout);
