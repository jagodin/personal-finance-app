import React, { useEffect } from 'react';
import {
    Grid,
    Typography,
    Divider,
    List,
    CircularProgress,
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
import PlaidLinkButton from 'react-plaid-link-button';
import moment from 'moment';

import {
    getTransactions,
    getAccounts,
    addAccount
} from '../../actions/accountActions';

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

function Dashboard({
    auth,
    getTransactions,
    getAccounts,
    plaid,
    transactions,
    addAccount,
    balance
}) {
    const classes = makeStyles();
    const theme = useTheme();

    // Get accounts on render
    useEffect(() => {
        async function fetchAccounts() {
            await getAccounts();
        }

        fetchAccounts();
    }, [auth.user]);

    // Get transactions on state.plaid.accounts change
    useEffect(() => {
        async function fetchTransactions() {
            await getTransactions({ userId: auth.user._id });
        }

        fetchTransactions();
    }, [plaid.accounts]);

    const getMonthlyTransactionTotal = transactions => {
        var total = 0;

        transactions.forEach(account => {
            account.transactions.forEach(transaction => {
                if (moment(transaction.date).isSame(new Date(), 'month')) {
                    total += transaction.amount;
                }
            });
        });

        return total.toLocaleString();
    };

    const getMostRecentTransactions = (transactions, count = 7) => {
        var allTransactions = [];

        transactions.forEach(account => {
            allTransactions = account.transactions.concat(allTransactions);
        });

        allTransactions = allTransactions.slice(1, count);

        return allTransactions.map(transaction => (
            <WidgetItem
                key={transaction.transaction_id}
                label={'Paid ' + moment(transaction.date).format('DD MMM')}
                value={'$ ' + transaction.amount.toLocaleString()}
                title={transaction.name}
            />
        ));
    };

    const getAccountBalancesTotal = balances => {};

    const handleOnSuccess = async (token, metadata) => {
        const plaidData = {
            public_token: token,
            metadata: metadata
        };

        addAccount(plaidData);
    };

    return (
        <>
            <PageTitle title="Dashboard" />
            <Grid container spacing={3} className={classes.contentMargin}>
                {!plaid.accountsLoading && plaid.accounts.length == 0 ? (
                    <Grid container justify="center" align="center">
                        <PlaidLinkButton
                            plaidLinkProps={{
                                clientName: 'Financify',
                                key: 'YOUR_PLAID_KEY',
                                env: 'sandbox',
                                product: ['transactions'],
                                onSuccess: handleOnSuccess
                            }}
                            buttonProps={{ className: classes.plaidButton }}
                        >
                            <Button color="primary" variant="contained">
                                Link your bank account
                            </Button>
                        </PlaidLinkButton>
                    </Grid>
                ) : plaid.accountsLoading ||
                  transactions.transactionsLoading ? (
                    <div style={{ width: '100%' }}>
                        <Grid container justify="center" align="center">
                            <CircularProgress />
                        </Grid>
                    </div>
                ) : (
                    <>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Widget
                                title="Accounts"
                                bodyClass={classes.fullHeightBody}
                                className={classes.card}
                            >
                                <div className={classes.accountsContainer}>
                                    <Typography variant="h2">
                                        $12, 131.47
                                    </Typography>
                                    <Divider
                                        className={classes.accountsDivider}
                                    />
                                    <ResponsiveContainer
                                        width="100%"
                                        height={100}
                                    >
                                        <LineChart
                                            data={[
                                                {
                                                    Amount: 10324.22,
                                                    Month: 'Aug'
                                                },
                                                {
                                                    Amount: 4824.62,
                                                    Month: 'Sept'
                                                },
                                                {
                                                    Amount: 11154.63,
                                                    Month: 'Oct'
                                                },
                                                {
                                                    Amount: 12624.92,
                                                    Month: 'Nov'
                                                },
                                                {
                                                    Amount: 7324.62,
                                                    Month: 'Dec'
                                                }
                                            ]}
                                            margin={{
                                                top: theme.spacing(2),
                                                left: theme.spacing(2),
                                                right: theme.spacing(2)
                                            }}
                                        >
                                            <XAxis
                                                dataKey="Month"
                                                interval={0}
                                            />
                                            <YAxis width={30} />
                                            <Tooltip />
                                            <Line
                                                type="natural"
                                                dataKey="Amount"
                                                stroke={
                                                    theme.palette.success.main
                                                }
                                                strokeWidth={2}
                                                dot
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                    <Divider
                                        className={classes.accountsDivider}
                                    />
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
                                    <Grid
                                        container
                                        align="center"
                                        justify="center"
                                    >
                                        <Button
                                            color="primary"
                                            to="/app/linked-accounts/"
                                            component={Link}
                                            underline="none"
                                        >
                                            View All Accounts
                                        </Button>
                                    </Grid>
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
                                    <Typography variant="h2">
                                        {getMonthlyTransactionTotal(
                                            transactions.transactions
                                        )}
                                    </Typography>
                                    <Divider
                                        className={classes.accountsDivider}
                                    />
                                    <List>
                                        {getMostRecentTransactions(
                                            transactions.transactions
                                        )}
                                    </List>

                                    <Grid
                                        container
                                        align="center"
                                        justify="center"
                                    >
                                        <Button
                                            color="primary"
                                            to="/app/transactions/"
                                            component={Link}
                                            underline="none"
                                        >
                                            View All Transactions
                                        </Button>
                                    </Grid>
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
                                    <Divider
                                        className={classes.accountsDivider}
                                    />
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
                                    <Grid
                                        container
                                        align="center"
                                        justify="center"
                                    >
                                        <Button
                                            color="primary"
                                            to="/app/budgets/"
                                            component={Link}
                                            underline="none"
                                        >
                                            View All Budgets
                                        </Button>
                                    </Grid>
                                </div>
                            </Widget>
                        </Grid>
                    </>
                )}
                {}
            </Grid>
        </>
    );
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    plaid: state.plaid,
    transactions: state.transactions,
    auth: state.auth,
    plaid: state.plaid
});

export default connect(mapStateToProps, {
    getTransactions,
    getAccounts,
    addAccount
})(Dashboard);
