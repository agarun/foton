import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';

import Nav from './nav/nav';
import SessionForm from './session_form/session_form_container';
import UserProfile from './users/user_profile_container';
import PhotoManage from './photos/photo_manage_container';
import PhotoSwitch from './photos/photo_show_switch';

import ModalRoot from './modal/modal_root';
import PageNotFound from './pages/404';

const App = () => (
  <main>
    <Nav />
    <Route component={ModalRoot} />
    <Switch>
      <AuthRoute
        exact path="/:formType(login|signup)"
        component={SessionForm}
      />
      <ProtectedRoute
        exact path="/manage"
        component={PhotoManage}
      />
      <Route
        path="/"
        component={PhotoSwitch}
      />
    </Switch>
  </main>
);

export default App;
