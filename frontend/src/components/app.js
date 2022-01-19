import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import MainForm from "./session/main_form"
import MainPage from './app/mainpage';
import Modal from './modal/modal'

const App = () => (
    <div>
      <Route path='/login' component={MainForm}/>
      <AuthRoute exact path="/" component={MainForm} />

      <Modal />
      
      <ProtectedRoute path="/" component={MainPage}/>
      <Switch>
         {/* <ProtectedRoute exact path='/profiles/:user_id'/>
         <ProtectedRoute exact path='/landmarks/:landmark_id'/> */}
      </Switch>
    </div>
);

export default App;