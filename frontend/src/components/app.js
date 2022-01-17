import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainForm from "./session/main_form"
import MainPage from './app/mainpage';

const App = () => (
    <div>
       <AuthRoute exact path="/" component={MainForm} />
       <ProtectedRoute path="/" component={MainPage}/>

    <Switch>
       {/* <ProtectedRoute exact path='/profiles/:user_id'/>
       <ProtectedRoute exact path='/landmarks/:landmark_id'/> */}
    </Switch>
    </div>
);

export default App;