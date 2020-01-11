import React from 'react';
import { Typography, Grid, ListItemIcon, ListItem } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import BudgetProgress from '../budget-progress/BudgetProgress';

// styles
import useStyles from './styles';

const WidgetItem = ({
    title,
    label,
    value,
    linkTo,
    icon,
    budgetProgress,
    ...props
}) => {
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
                        <Typography variant="body1">{label}</Typography>
                    </Grid>
                    {budgetProgress ? (
                        <Grid item>
                            <BudgetProgress
                                budgetUsed={budgetProgress.budgetUsed}
                                budgetTotal={budgetProgress.budgetTotal}
                            />
                        </Grid>
                    ) : null}
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
