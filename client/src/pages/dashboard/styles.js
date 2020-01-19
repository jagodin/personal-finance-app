import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    card: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    fullHeightBody: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    accountsDivider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    contentMargin: {
        marginTop: theme.spacing(4)
    },
    plaidButton: {
        border: 'none'
    }
}));
