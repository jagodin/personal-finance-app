import React, { useEffect, useRef } from 'react';
import { Grid, List, Divider, CircularProgress, Box } from '@material-ui/core';
import PlaidLinkButton from 'react-plaid-link-button';
import { connect } from 'react-redux';

import getSymbolFromCurrency from 'currency-symbol-map';

import { getTransactions, getAccounts } from '../../actions/accountActions';

// components
import PageTitle from '../../components/pagetitle/PageTitle';
import Widget from '../../components/widget/Widget';
import WidgetItem from '../../components/widget-item/WidgetItem';

// styles
import makeStyles from './styles';

function Transactions({
    getTransactions,
    auth,
    transactions,
    getAccounts,
    plaid
}) {
    const classes = makeStyles();

    // Get accounts on render
    useEffect(() => {
        async function fetchAccounts() {
            await getAccounts();
        }

        fetchAccounts();
    }, []);

    // Get transactions on state.plaid.accounts change
    useEffect(() => {
        async function fetchTransactions() {
            await getTransactions({ userId: auth.user._id });
        }

        fetchTransactions();
    }, [plaid.accounts]);

    return (
        <>
            <Grid container justify="space-between" className={classes.header}>
                <PageTitle title="Transactions" />
            </Grid>
            <Grid container spacing={3}>
                {transactions.transactions.length != 0 ? (
                    transactions.transactions.map(institution => (
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Widget
                                //id={institution._id}
                                title={institution.accountName}
                                bodyClass={classes.fullHeightBody}
                                className={classes.card}
                            >
                                <div>
                                    <Divider
                                        className={classes.accountsDivider}
                                    />
                                    <List>
                                        {institution.transactions.map(
                                            transaction => (
                                                <>
                                                    <WidgetItem
                                                        //key={transaction.account_id}
                                                        title={transaction.name}
                                                        label={transaction.category.map(
                                                            (item, i) => {
                                                                if (
                                                                    transaction
                                                                        .category
                                                                        .length ===
                                                                    i + 1
                                                                ) {
                                                                    return item;
                                                                } else {
                                                                    return (
                                                                        item +
                                                                        ' / '
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                        date={transaction.date}
                                                        value={`${getSymbolFromCurrency(
                                                            transaction.iso_currency_code
                                                        )} ${transaction.amount.toLocaleString()}`}
                                                        {...transaction}
                                                    />
                                                </>
                                            )
                                        )}
                                    </List>
                                </div>
                            </Widget>
                        </Grid>
                    ))
                ) : (
                    <div style={{ width: '100%' }}>
                        <Grid align="center" justify="center">
                            <CircularProgress />
                        </Grid>
                    </div>
                )}
            </Grid>
        </>
    );
}

const mapStateToProps = state => ({
    plaid: state.plaid,
    transactions: state.transactions,
    auth: state.auth
});

export default connect(mapStateToProps, {
    getTransactions,
    getAccounts
})(Transactions);
