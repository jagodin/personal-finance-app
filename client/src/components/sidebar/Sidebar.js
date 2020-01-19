import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List, Hidden } from '@material-ui/core';
import {
    Home as HomeIcon,
    Receipt as TransactionsIcon,
    Settings as SettingsIcon,
    QuestionAnswer as SupportIcon,
    HelpOutline as FAQIcon,
    ArrowBack as ArrowBackIcon,
    Person as AccountIcon
} from '@material-ui/icons';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { useTheme } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleSidebar } from '../../actions/sidebarActions';

// styles
import classNames from 'classnames';
import useStyles from './styles';

// components
import SidebarLink from './components/SidebarLink';

const structure = [
    { id: 10, type: 'divider' },
    { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
    {
        id: 1,
        label: 'Transactions',
        link: '/app/transactions',
        icon: <TransactionsIcon />
    },
    {
        id: 2,
        label: 'Linked Accounts',
        link: '/app/linked-accounts',
        icon: <AccountBalanceIcon />
    },
    {
        id: 2,
        label: 'Budgets',
        link: '/app/budgets',
        icon: <AttachMoneyIcon />
    },
    { id: 3, type: 'divider' },
    {
        id: 4,
        label: 'Settings',
        link: '/app/settings',
        icon: <SettingsIcon />
    },
    {
        id: 5,
        label: 'My Account',
        link: '/app/account',
        icon: <AccountIcon />
    },
    { id: 6, type: 'divider' },
    { id: 7, type: 'title', label: 'HELP' },
    { id: 8, label: 'Support', link: '/app/support', icon: <SupportIcon /> },
    { id: 9, label: 'FAQ', link: '/app/faq', icon: <FAQIcon /> }
];

const Sidebar = ({ location, toggleSidebar, isSidebarOpen }) => {
    const classes = useStyles();

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar()}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(
                                classes.headerIcon,
                                classes.headerIconCollapse
                            )
                        }}
                    />
                </IconButton>
            </div>
            <List>
                {structure.map(link => (
                    <SidebarLink
                        key={link.id}
                        isSidebarOpen={isSidebarOpen}
                        location={location}
                        {...link}
                    />
                ))}
            </List>
        </div>
    );

    return (
        <nav>
            <Hidden smUp implementation="js">
                <Drawer
                    variant="temporary"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: isSidebarOpen,
                        [classes.drawerClose]: !isSidebarOpen
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: isSidebarOpen,
                            [classes.drawerClose]: !isSidebarOpen
                        })
                    }}
                    open={isSidebarOpen}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="js">
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: isSidebarOpen,
                        [classes.drawerClose]: !isSidebarOpen
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: isSidebarOpen,
                            [classes.drawerClose]: !isSidebarOpen
                        })
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};

Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isSidebarOpen: state.sidebar.isSidebarOpen
});

export default compose(
    withRouter,
    connect(mapStateToProps, { toggleSidebar })
)(Sidebar);
