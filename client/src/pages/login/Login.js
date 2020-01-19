import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Box
} from '@material-ui/core';
import { connect } from 'react-redux';
import { register, login, loadUser } from '../../actions/authActions';
import PropTypes from 'prop-types';

import logo from './logo.jpeg';

// styles
import useStyles from './styles';

// logo
import google from '../../images/google.svg';
import { Redirect } from 'react-router-dom';

const Login = ({
    register,
    login,
    loadUser,
    isAuthenticated,
    tab = 0,
    errors
}) => {
    var classes = useStyles();

    // Hooks
    var [activeTabId, setActiveTabId] = useState(tab);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    if (isAuthenticated) {
        return <Redirect to="/app/dashboard" />;
    }

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const registerUser = async e => {
        e.preventDefault();
        register({ name, email, password, password2 });
    };

    const loginUser = async e => {
        e.preventDefault();
        await login({ email, password });
        await loadUser();
    };

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <Box className={classes.logoContainer} sm={6} md={6} lg={6}></Box>
            <Box className={classes.signInContainer} sm={6} md={6} lg={6}>
                <div className={classes.form}>
                    <Tabs
                        value={activeTabId}
                        onChange={(e, id) => setActiveTabId(id)}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Login" classes={{ root: classes.tab }} />
                        <Tab label="Register" classes={{ root: classes.tab }} />
                    </Tabs>
                    {activeTabId === 0 && (
                        <React.Fragment>
                            <Typography
                                variant="h1"
                                className={classes.greeting}
                            >
                                Welcome to Financify
                            </Typography>
                            <Button
                                size="large"
                                className={classes.googleButton}
                            >
                                <img
                                    src={google}
                                    alt="google"
                                    className={classes.googleIcon}
                                />
                                &nbsp;Sign in with Google
                            </Button>
                            <div className={classes.formDividerContainer}>
                                <div className={classes.formDivider} />
                                <Typography className={classes.formDividerWord}>
                                    or
                                </Typography>
                                <div className={classes.formDivider} />
                            </div>
                            <div className={classes.inputContainer}>
                                <TextField
                                    name="email"
                                    InputProps={{
                                        classes: {
                                            underline:
                                                classes.textFieldUnderline,
                                            input: classes.textField
                                        }
                                    }}
                                    margin="normal"
                                    placeholder="Email Address"
                                    type="email"
                                    fullWidth
                                    value={email}
                                    onChange={e => onChange(e)}
                                />
                                <TextField
                                    name="password"
                                    InputProps={{
                                        classes: {
                                            underline:
                                                classes.textFieldUnderline,
                                            input: classes.textField
                                        }
                                    }}
                                    margin="normal"
                                    placeholder="Password"
                                    type="password"
                                    fullWidth
                                    value={password}
                                    onChange={e => onChange(e)}
                                />
                                <div className={classes.formButtons}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={e => loginUser(e)}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        color="primary"
                                        size="large"
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        Forgot Password?
                                    </Button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                    {activeTabId === 1 && (
                        <React.Fragment>
                            <Typography
                                variant="h2"
                                className={classes.greeting}
                            >
                                Create an account
                            </Typography>
                            <div className={classes.inputContainer}>
                                <TextField
                                    name="name"
                                    InputProps={{
                                        classes: {
                                            underline:
                                                classes.textFieldUnderline,
                                            input: classes.textField
                                        }
                                    }}
                                    margin="normal"
                                    placeholder="Name"
                                    type="text"
                                    fullWidth
                                    value={name}
                                    onChange={e => onChange(e)}
                                />
                                <TextField
                                    name="email"
                                    InputProps={{
                                        classes: {
                                            underline:
                                                classes.textFieldUnderline,
                                            input: classes.textField
                                        }
                                    }}
                                    value={email}
                                    onChange={e => onChange(e)}
                                    margin="normal"
                                    placeholder="Email Address"
                                    type="email"
                                    fullWidth
                                />
                                <TextField
                                    name="password"
                                    InputProps={{
                                        classes: {
                                            underline:
                                                classes.textFieldUnderline,
                                            input: classes.textField
                                        }
                                    }}
                                    value={password}
                                    onChange={e => onChange(e)}
                                    margin="normal"
                                    placeholder="Password"
                                    type="password"
                                    fullWidth
                                />
                                <TextField
                                    name="password2"
                                    InputProps={{
                                        classes: {
                                            underline:
                                                classes.textFieldUnderline,
                                            input: classes.textField
                                        }
                                    }}
                                    value={password2}
                                    onChange={e => onChange(e)}
                                    margin="normal"
                                    placeholder="Confirm Password"
                                    type="password"
                                    fullWidth
                                />
                                <div className={classes.formButtons}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        onClick={e => registerUser(e)}
                                    >
                                        Register
                                    </Button>
                                </div>
                                <div className={classes.formDividerContainer}>
                                    <div className={classes.formDivider} />
                                    <Typography
                                        className={classes.formDividerWord}
                                    >
                                        or
                                    </Typography>
                                    <div className={classes.formDivider} />
                                </div>
                                <Button
                                    size="large"
                                    className={classes.googleButton}
                                >
                                    <img
                                        src={google}
                                        alt="google"
                                        className={classes.googleIcon}
                                    />
                                    &nbsp;Sign in with Google
                                </Button>
                            </div>
                        </React.Fragment>
                    )}
                </div>
                <Typography color="primary" className={classes.copyright}>
                    © 2019 Finacify, Inc. All rights reserved.
                </Typography>
            </Box>
        </Grid>
    );
};

Login.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.array
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errors: state.auth.errors
});

export default connect(mapStateToProps, { register, login, loadUser })(Login);
