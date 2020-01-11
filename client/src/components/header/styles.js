import { makeStyles } from '@material-ui/styles';
import { FullscreenExit } from '@material-ui/icons';

export default makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        display: 'flex'
    },
    toolbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    headerIcon: {
        fontSize: 28,
        color: 'rgba(255, 255, 255, 0.35)'
    },
    toolbarIcons: {
        marginLeft: 'auto'
    },
    profileMenuUser: {
        display: 'flex',
        padding: theme.spacing(2),
        alignItems: 'center'
    },
    profileMenuUserIcon: {
        height: 50,
        width: 50,
        borderRadius: '50%',
        marginRight: theme.spacing(2)
    },
    profileMenu: {
        minWidth: 200,
        display: 'flex',
        justifyContent: 'center'
    },
    headerMenu: {
        marginTop: theme.spacing(7)
    },
    profileUserIcon: {
        fontSize: 28,
        color: '#B9B9B9'
    },
    profileMenuLink: {
        fontSize: 16,
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    profileMenuItem: {
        color: theme.palette.text.hint,
        width: '200px'
    },
    profileMenuIcon: {
        marginRight: theme.spacing(3)
    },
    headerMenuItem: {
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        }
    }
}));
