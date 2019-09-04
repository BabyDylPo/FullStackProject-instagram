import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

//import containers here
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SessionFormContainer from './session_form/session_form_container';
import Home from '../components/home/home';
import UserProfileContainer from '../components/profile/user_profile_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app-div">
        <Modal />
        <Switch>
            <AuthRoute path="/login" component={LogInFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path="/" component={SessionFormContainer} />
            <ProtectedRoute path="/home" component={Home} />
            <ProtectedRoute path="/profile" component={UserProfileContainer} />
            <Redirect to="/login"/>
        </Switch>
    </div>
)

export default App;