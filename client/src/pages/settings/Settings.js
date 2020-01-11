import React from 'react';
import { Grid } from '@material-ui/core';

// components
import PageTitle from '../../components/pagetitle/PageTitle';

// styles
import makeStyles from './styles';

function Settings() {
    return (
        <Grid container>
            <PageTitle title="Settings" />
        </Grid>
    );
}

export default Settings;
