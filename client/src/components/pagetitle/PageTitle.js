import React from 'react';

// styles
import useStyles from './styles';

// components
import { Typography } from '@material-ui/core';

const PageTitle = props => {
    const classes = useStyles();

    return (
        <div className={classes.pageTitleContainer}>
            <Typography className={classes.typo} variant="h2" size="sm">
                {props.title}
            </Typography>
        </div>
    );
};

export default PageTitle;
