import React from 'react';

// styles
import useStyles from './styles';

const BudgetProgress = ({ budgetUsed, budgetTotal }) => {
    const classes = useStyles();

    const percentageUsed = (budgetUsed / budgetTotal) * 100;
    const percentageLeft = 100 - percentageUsed;

    return (
        <div className={classes.progressContainer}>
            <div
                style={{
                    width: `${percentageUsed}%`,
                    backgroundColor: 'red',
                    height: '100%',
                    flex: 1
                }}
            ></div>
            <div
                style={{
                    backgroundColor: 'green',
                    height: '100%',
                    flex: `0 0 ${percentageLeft}%`
                }}
            ></div>
        </div>
    );
};

export default BudgetProgress;
