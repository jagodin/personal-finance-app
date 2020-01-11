import React, { useState } from 'react';
import {
    Paper,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Grid
} from '@material-ui/core';
import { MoreVert as MoreIcon } from '@material-ui/icons';
import CachedIcon from '@material-ui/icons/Cached';
import classnames from 'classnames';

// styles
import useStyles from './styles';

export default function Widget({
    children,
    title,
    noBodyPadding,
    bodyClass,
    header,
    widgetMenu,
    refresh,
    ...props
}) {
    const classes = useStyles();

    // local
    const [moreButtonRef, setMoreButtonRef] = useState(null);
    const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);

    return (
        <div className={classes.widgetWrapper}>
            <Paper
                className={classes.paper}
                classes={{ root: classes.widgetRoot }}
            >
                <div className={classes.widgetHeader}>
                    {header ? (
                        header
                    ) : (
                        <Grid container justify="space-between">
                            <Grid item>
                                <Typography variant="h5" color="textSecondary">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                {refresh ? (
                                    <CachedIcon
                                        color="primary"
                                        classes={{ root: classes.cachedIcon }}
                                    ></CachedIcon>
                                ) : null}
                                {widgetMenu ? (
                                    <IconButton
                                        color="primary"
                                        classes={{ root: classes.moreButton }}
                                        aria-owns="widget-menu"
                                        aria-haspopup="true"
                                        onClick={() => setMoreMenuOpen(true)}
                                        buttonRef={setMoreButtonRef}
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                ) : null}
                            </Grid>
                        </Grid>
                    )}
                </div>
                <div
                    className={classnames(classes.widgetBody, {
                        [classes.noPadding]: noBodyPadding,
                        [bodyClass]: bodyClass
                    })}
                >
                    {children}
                </div>
            </Paper>
            {widgetMenu ? (
                <Menu
                    id="widget-menu"
                    open={isMoreMenuOpen}
                    anchorEl={moreButtonRef}
                    onClose={() => setMoreMenuOpen(false)}
                    disableAutoFocusItem
                >
                    {widgetMenu.map(item => (
                        <MenuItem key={item.id}>{item.item}</MenuItem>
                    ))}
                </Menu>
            ) : null}
        </div>
    );
}
