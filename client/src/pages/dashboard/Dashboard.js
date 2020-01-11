import React, { useState } from 'react';
import { Grid, Typography, Divider, List } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

// components
import PageTitle from '../../components/pagetitle/PageTitle';
import Widget from '../../components/widget/Widget';
import WidgetItem from '../../components/widget-item/WidgetItem';

// styles
import makeStyles from './styles';
import { useTheme } from '@material-ui/styles';

const accountsData = [
    {
        id: 1,
        name: 'Checking',
        amount: '$ 2,325.12',
        cardNumber:
            '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 1234'
    },
    {
        id: 2,
        name: 'Savings',
        amount: '$ 8,313.63',
        cardNumber:
            '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4321'
    },
    {
        id: 3,
        name: 'Car Savings',
        amount: '$ 713.63',
        cardNumber:
            '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 2458'
    },
    {
        id: 4,
        name: 'Vacation Savings',
        amount: '$ 513.63',
        cardNumber:
            '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 1847'
    }
];

const transactionsData = [
    {
        id: 1,
        name: 'Rent',
        amount: '-$ 1,250.00',
        cardNumber: 'Paid Dec 1'
    },
    {
        id: 2,
        name: 'PC Credit',
        amount: '-$ 255.87',
        cardNumber: 'Paid Dec 24'
    },
    {
        id: 3,
        name: 'MASSINES Y.I.G',
        amount: '-$ 65.63',
        cardNumber: 'Paid Dec 28'
    },
    {
        id: 4,
        name: 'BRIDGEHEAD COFF',
        amount: '-$ 2.89',
        cardNumber: 'Paid Dec 28'
    },
    {
        id: 5,
        name: 'LIVE ON ELGIN',
        amount: '-$ 2.89',
        cardNumber: 'Paid Dec 29'
    },
    {
        id: 6,
        name: 'EDC PAY/PAY	',
        amount: '+$ 1647.48',
        cardNumber: 'Received Jan 2'
    }
];

const budgets = [
    {
        id: 1,
        name: 'Groceries',
        label: '$53.34/240',
        budget: {
            budgetUsed: 53.34,
            budgetTotal: 240
        }
    },
    {
        id: 2,
        name: 'Restaurants',
        label: '$112.45/170',
        budget: {
            budgetUsed: 53.34,
            budgetTotal: 240
        }
    }
];

function Dashboard({ auth }) {
    const classes = makeStyles();
    const theme = useTheme();
    return (
        <>
            <PageTitle title="Dashboard" />
            <Grid container spacing={3} className={classes.contentMargin}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Widget
                        title="Accounts"
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                    >
                        <div className={classes.accountsContainer}>
                            <Typography variant="h2">$12, 131.47</Typography>
                            <Divider className={classes.accountsDivider} />
                            <ResponsiveContainer width="100%" height={100}>
                                <LineChart
                                    data={[
                                        {
                                            Amount: 10324.22,
                                            Month: 'Aug'
                                        },
                                        { Amount: 4824.62, Month: 'Sept' },
                                        { Amount: 11154.63, Month: 'Oct' },
                                        { Amount: 12624.92, Month: 'Nov' },
                                        { Amount: 7324.62, Month: 'Dec' }
                                    ]}
                                    margin={{
                                        top: theme.spacing(2),
                                        left: theme.spacing(2),
                                        right: theme.spacing(2)
                                    }}
                                >
                                    <XAxis dataKey="Month" interval={0} />
                                    <YAxis width={30} />
                                    <Tooltip />
                                    <Line
                                        type="natural"
                                        dataKey="Amount"
                                        stroke={theme.palette.success.main}
                                        strokeWidth={2}
                                        dot
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            <Divider className={classes.accountsDivider} />
                            <List>
                                {accountsData.map(item => (
                                    <WidgetItem
                                        key={item.id}
                                        title={item.name}
                                        label={item.cardNumber}
                                        value={item.amount}
                                        {...item}
                                    />
                                ))}
                            </List>
                        </div>
                    </Widget>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Widget
                        title="Transactions"
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                    >
                        <div className={classes.accountsContainer}>
                            <Typography variant="h2">$1 811.50</Typography>
                            <Divider className={classes.accountsDivider} />
                            <List>
                                {transactionsData.map(item => (
                                    <WidgetItem
                                        key={item.id}
                                        title={item.name}
                                        label={item.cardNumber}
                                        value={item.amount}
                                        {...item}
                                    />
                                ))}
                            </List>
                        </div>
                    </Widget>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Widget
                        title="Budgets"
                        bodyClass={classes.fullHeightBody}
                        className={classes.card}
                    >
                        <div className={classes.accountsContainer}>
                            <Typography variant="h2">
                                $ 1,457.13 / 3,304.47
                            </Typography>
                            <Divider className={classes.accountsDivider} />
                            <List>
                                {budgets.map(budget => (
                                    <WidgetItem
                                        key={budget.id}
                                        title={budget.name}
                                        label={budget.progress}
                                        {...budget}
                                        budgetProgress={{
                                            budgetTotal: 3,
                                            budgetUsed: 1
                                        }}
                                    />
                                ))}
                            </List>
                        </div>
                    </Widget>
                </Grid>
            </Grid>
        </>
    );
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
