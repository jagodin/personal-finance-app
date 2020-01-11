import React, { useEffect, useRef } from 'react';
import { Grid, List, Divider } from '@material-ui/core';
import PlaidLinkButton from 'react-plaid-link-button';
import { connect } from 'react-redux';

import {
    getAccounts,
    addAccount,
    getBalances
} from '../../actions/accountAcctions';

// components
import PageTitle from '../../components/pagetitle/PageTitle';
import Widget from '../../components/widget/Widget';
import WidgetItem from '../../components/widget-item/WidgetItem';

// styles
import makeStyles from './styles';

const widgetMenu = [
    { id: 1, item: 'Edit' },
    { id: 2, item: 'Delete' }
];

function LinkedAccounts({
    addAccount,
    getAccounts,
    plaid,
    balance,
    accounts,
    getBalances
}) {
    const classes = makeStyles();

    useEffect(() => {
        async function fetchAccounts() {
            await getAccounts();
        }

        fetchAccounts();
    }, []);

    // Get balances if accounts changes
    // This is getting called on render, but there are no accounts
    // Then it gets called again when accounts is in state
    // The null response is received after, causing an error
    const isInitialMount = useRef(true);

    useEffect(() => {
        async function fetchBalances() {
            await getBalances(plaid.accounts);
        }

        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            fetchBalances();
        }
    }, [plaid.accounts]);

    const handleOnSuccess = async (token, metadata) => {
        const plaidData = {
            public_token: token,
            metadata: metadata
        };

        addAccount(plaidData);
    };

    return (
        <>
            <Grid container justify="space-between" className={classes.header}>
                <PageTitle title="Linked Accounts" />
                <PlaidLinkButton
                    plaidLinkProps={{
                        clientName: 'Financify',
                        key: '4dbff516a54a26c92da118c1dfe2ba',
                        env: 'sandbox',
                        product: ['transactions'],
                        onSuccess: handleOnSuccess
                    }}
                ></PlaidLinkButton>
            </Grid>
            <Grid container spacing={3}>
                {balance.balances ? (
                    balance.balances.map(institution => (
                        <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                            <Widget
                                title={institution.institutionName}
                                bodyClass={classes.fullHeightBody}
                                className={classes.card}
                                widgetMenu={widgetMenu}
                                refresh
                            >
                                <div>
                                    <Divider
                                        className={classes.accountsDivider}
                                    />
                                    <List>
                                        {institution.accounts.map(account => (
                                            <WidgetItem
                                                key={account.account_id}
                                                title={account.name}
                                                label={account.official_name}
                                                value={account.balances.current}
                                                {...account}
                                            />
                                        ))}
                                    </List>
                                </div>
                            </Widget>
                        </Grid>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </Grid>
        </>
    );
}

const mapStateToProps = state => ({
    plaid: state.plaid,
    balance: state.balance
});

export default connect(mapStateToProps, {
    addAccount,
    getAccounts,
    getBalances
})(LinkedAccounts);
