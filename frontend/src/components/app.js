import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainForm from "./session/main_form"

const App = () => (
    <Switch>
       <AuthRoute exact path="/" component={MainForm} />
    </Switch>
);

export default App;