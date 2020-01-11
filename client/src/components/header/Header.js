import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Link,
    Typography,
    Hidden
} from '@material-ui/core';
import {
    Menu as MenuIcon,
    Person as AccountIcon,
    Search as SearchIcon,
    ArrowBack as ArrowBackIcon
} from '@material-ui/icons';
import classNames from 'classnames';

import { logout } from '../../actions/authActions';
import { toggleSidebar } from '../../actions/sidebarActions';

// styles
import useStyles from './styles';

const Header = ({ auth: { user }, logout, toggleSidebar }) => {
    const classes = useStyles();

    const [sidebarOpen, setSidebarOpen] = useState(0);
    const [profileMenu, setProfileMenu] = useState(null);

    const handleSidebarOpen = id => () => {
        setSidebarOpen(!id);
    };

    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Hidden smUp>
                    <IconButton color="inherit" onClick={() => toggleSidebar()}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    aria-controls="profile-menu"
                    className={classes.toolbarIcons}
                    onClick={e => setProfileMenu(e.currentTarget)}
                >
                    <AccountIcon
                        classes={{ root: classes.headerIcon }}
                    ></AccountIcon>
                </IconButton>
                <Menu
                    id="profile-menu"
                    anchorEl={profileMenu}
                    classes={{ paper: classes.profileMenu }}
                    className={classes.headerMenu}
                    disableAutoFocusItem
                    open={Boolean(profileMenu)}
                    onClose={() => setProfileMenu(null)}
                >
                    {user === null ? (
                        <p>Loading...</p>
                    ) : (
                        <div className={classes.test}>
                            <div className={classes.profileMenuUser}>
                                <img
                                    className={classes.profileMenuUserIcon}
                                    src={user.avatar}
                                    alt=""
                                />
                                <Typography variant="h4" weight="medium">
                                    {user.name}
                                </Typography>
                            </div>
                            <MenuItem
                                className={classNames(
                                    classes.profileMenuItem,
                                    classes.headerMenuItem
                                )}
                            >
                                <AccountIcon
                                    classes={{
                                        root: classes.profileUserIcon
                                    }}
                                    className={classes.profileMenuIcon}
                                ></AccountIcon>{' '}
                                Account
                            </MenuItem>
                            <div className={classes.profileMenuUser}>
                                <Link
                                    color="primary"
                                    className={classes.profileMenuLink}
                                    onClick={() => logout()}
                                >
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    )}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    toggleSidebar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    isSidebarOpen: state.sidebar.isSidebarOpen
});

export default connect(mapStateToProps, { logout, toggleSidebar })(Header);
