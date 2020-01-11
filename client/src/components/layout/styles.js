import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    contentShift: {
        padding: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginLeft: '240px'
        }
    },
    fakeToolbar: {
        ...theme.mixins.toolbar
    }
}));
