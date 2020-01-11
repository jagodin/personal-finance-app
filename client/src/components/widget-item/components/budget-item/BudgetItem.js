import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// styles
import useStyles from './styles';

// components
import LinearProgress from '@material-ui/core/LinearProgress';

const BudgeItem = ({ budget: { budgetUsed, budgetTotal } }) => {
    const classes = useStyles();

    const percentage = (budgetUsed / budgetTotal) * 100;

    return <LinearProgress variant="determinate" value={percentage} />;
};

export default BudgeItem;
