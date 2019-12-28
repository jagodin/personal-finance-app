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
import { register, login } from '../../actions/authActions';
import PropTypes from 'prop-types';

// styles
import useStyles from './styles';

// logo
import google from '../../images/google.svg';
import { Redirect } from 'react-router-dom';

const Login = ({ register, login, isAuthenticated }, { tab = 0 }) => {
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

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const registerUser = async e => {
        console.log('Register123');
        e.preventDefault();
        if (password !== password2) {
            console.error('Passwords do not matcg');
        } else {
            register({ name, email, password, password2 });
        }
    };

    const loginUser = async e => {
        e.preventDefault();
        login({ email, password });
    };

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <Box className={classes.logoContainer} sm={6} md={6} lg={6}>
                <span>Logo</span>
            </Box>
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
                                    <Button color="primary" size="large">
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
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, login })(Login);
