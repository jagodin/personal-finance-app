import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    widgetWrapper: {
        display: 'flex',
        minHeight: '100%'
    },
    widgetHeader: {
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    widgetRoot: {
        boxShadow: theme.customShadows.widget
    },
    widgetBody: {
        paddingBottom: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)
    },
    noPadding: {
        padding: 0
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'hidden'
    },
    button: {
        boxShadow: theme.customShadows.widget,
        textTransform: 'none',
        '&:active': {
            boxShadow: theme.customShadows.widgetWide
        }
    },
    moreButton: {
        marginLeft: theme.spacing(1),
        marginBottom: -theme.spacing(1),
        padding: 0,
        width: 40,
        height: 40,
        color: theme.palette.text.hint,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'rgba(255, 255, 255, 0.35)'
        }
    },
    cachedIcon: {
        marginBottom: -theme.spacing(1),
        padding: 0,
        width: 40,
        height: 40,
        borderRadius: '50%',
        color: theme.palette.text.hint,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'rgba(255, 255, 255, 0.35)'
        }
    }
}));
