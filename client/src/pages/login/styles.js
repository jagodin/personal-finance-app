import { makeStyles } from '@material-ui/styles';
import logo from './logo.jpeg';

export default makeStyles(theme => ({
    container: {
        height: '100vh'
    },
    logoContainer: {
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'grey',
        height: '100%',
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
            width: '50%'
        }
    },
    signInContainer: {
        height: '100%',
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    form: {
        width: 300,
        textAlign: 'center',
        height: '560px',
        [theme.breakpoints.down('xs')]: {
            width: 350
        }
    },
    tab: {
        fontWeight: 400,
        fontSize: 18
    },
    greeting: {
        fontWeight: 400,
        textAlign: 'center',
        marginTop: theme.spacing(4)
    },
    googleButton: {
        marginTop: theme.spacing(6),
        boxShadow: theme.customShadows.widget,
        backgroundColor: 'white',
        width: '100%',
        textTransform: 'none'
    },
    googleIcon: {
        width: 30,
        marginRight: theme.spacing(2)
    },
    formDividerContainer: {
        marginTop: theme.spacing(4),
        display: 'flex',
        alignItems: 'center'
    },
    formDivider: {
        flexGrow: 1,
        height: 1,
        backgroundColor: theme.palette.text.hint + '40'
    },
    formDividerWord: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    textFieldUnderline: {
        '&:before': {
            borderBottomColor: theme.palette.primary.light
        },
        '&:after': {
            borderBottomColor: theme.palette.primary.main
        },
        '&:hover:before': {
            borderBottomColor: `${theme.palette.primary.light} !important`
        }
    },
    textField: {
        borderBottomColor: theme.palette.background.light
    },
    formButtons: {
        width: '100%',
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: theme.spacing(4)
    },
    copyright: {
        marginTop: theme.spacing(4),
        whiteSpace: 'nowrap',
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            bottom: theme.spacing(2)
        }
    }
}));
