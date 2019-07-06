import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

//import containers here
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from '../components/home/greeting_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app-div">
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute path="/home" component={GreetingContainer} />
            <Route path="/" component={SessionFormContainer} />
            <Redirect to="/login"/>
        </Switch>
        <footer className="footer">
            <h1>This is my footer</h1>
        </footer>
    </div>
)

export default App;