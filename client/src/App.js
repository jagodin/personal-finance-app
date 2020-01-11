import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import Layout from './components/layout/Layout';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

import { loadUser } from './actions/authActions';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <PrivateRoute path="/app" component={Layout} />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route
                        exact
                        path="/register"
                        render={props => <Login {...props} tab={1} />}
                    />
                </Switch>
            </Router>
        </Provider>
    );
};
export default App;
