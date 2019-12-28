import React, { useState } from 'react';
import { Drawer, IconButton, List } from '@material-ui/core';
import {
    Home as HomeIcon,
    Settings as SettingsIcon
} from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';

// styles
import useStyles from './styles';

const structure = [
    {id: 0, label = 'Dashboard', link: '/dashboard', icon: <HomeIcon />},
    {id: 1, label = 'Settings', link: '/settings', icon: <SettingsIcon />},
]

const Sidebar = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer>

        </Drawer>
    );
};

export default Sidebar;
