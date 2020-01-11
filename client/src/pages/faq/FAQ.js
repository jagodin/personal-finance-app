import React from 'react';
import { Grid } from '@material-ui/core';

// components
import PageTitle from '../../components/pagetitle/PageTitle';

// styles
import makeStyles from './styles';

function FAQ() {
    return (
        <Grid container>
            <PageTitle title="Frequently Asked Questions" />
        </Grid>
    );
}

export default FAQ;
