import { makeStyles } from '@material-ui/styles';

const drawerWidth = 240;

export default makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: 'hidden',
        width: drawerWidth,
        [theme.breakpoints.down('sm')]: {
            width: drawerWidth
        }
    },
    toolbar: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    mobileBackButton: {
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));
