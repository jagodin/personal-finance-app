import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    pageTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    typo: {
        color: theme.palette.text.hint
    }
}));
