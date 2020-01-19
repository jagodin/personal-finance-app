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
        marginTop: '16px',
        marginBottom: '16px'
    },
    root: {
        display: 'flex',
        fleexGrow: 1
    },
    header: {
        marginBottom: '34px'
    },
    plaidButton: {
        border: 'none'
    }
}));
