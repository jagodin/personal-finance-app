import React from 'react';
import { Grid } from '@material-ui/core';

// components
import PageTitle from '../../components/pagetitle/PageTitle';

// styles
import makeStyles from './styles';

function MyAccount() {
    return (
        <Grid container>
            <PageTitle title="My Account" />
        </Grid>
    );
}

export default MyAccount;
