import React from 'react';
import { Typography, Grid, ListItemIcon, ListItem } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import moment from 'moment';

// styles
import useStyles from './styles';

const WidgetItem = ({ title, label, value, linkTo, icon, date, ...props }) => {
    const classes = useStyles();

    return (
        <div className={classes.itemContainer}>
            <ListItem
                to={linkTo}
                button
                component={linkTo && Link}
                className={classes.item}
                disableRipple
            >
                <Grid justify="space-between" container alignItems="center">
                    <Grid item>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body1">
                            {label}
                            {date
                                ? ' / ' + moment(date).format('MMM DD, YYYY')
                                : null}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Typography variant="h6">{value}</Typography>
                            <ListItemIcon className={classes.linkIcon}>
                                {icon ? icon : <ArrowForwardIosIcon />}
                            </ListItemIcon>
                        </Grid>
                    </Grid>
                </Grid>
            </ListItem>
        </div>
    );
};

export default WidgetItem;
