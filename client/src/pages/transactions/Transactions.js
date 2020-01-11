import React from 'react';
import { Grid } from '@material-ui/core';

// components
import PageTitle from '../../components/pagetitle/PageTitle';

// styles
import makeStyles from './styles';

function Transactions() {
    return (
        <Grid container>
            <PageTitle title="Transactions" />
        </Grid>
    );
}

export default Transactions;
