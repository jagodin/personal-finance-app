import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    itemContainer: {
        width: '100%',
        height: '60px'
    },
    item: {
        textDecoration: 'none',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.background.light
        }
    },
    linkActive: {
        backgroundColor: theme.palette.background.light
    },
    linkIcon: {
        color: theme.palette.text.secondary + '99',
        transition: theme.transitions.create('color'),
        width: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    linkIconActive: {
        color: theme.palette.primary.main
    }
}));
