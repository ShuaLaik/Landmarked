import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainForm from "./session/main_form"

const App = () => (
    <Switch>
       <AuthRoute exact path="/" component={MainForm} />
       {/* <ProtectedRoute exact path='/profiles/:user_id'/>
       <ProtectedRoute exact path='/landmarks/:landmark_id'/> */}
    </Switch>
);

export default App;