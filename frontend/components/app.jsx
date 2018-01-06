import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

import Nav from './nav/nav';
import SessionForm from './session_form/session_form_container';
import UserProfile from './users/user_profile_container';
import PhotoSwitch from './photos/photo_show_switch';

import ModalRoot from './modal/modal_root';
import PageNotFound from './pages/404';

const App = () => (
  <main>
    <Nav />
    <Switch>
      <AuthRoute
        exact path="/:formType(login|signup)"
        component={SessionForm}
      />
      {/* <Route component={PageNotFound} /> */}
      {/* <Route
        exact path="/upload"
        // TODO: Navigate user to ':username/manage' and open upload modal
      /> */}
      <Route
        path="/"
        component={PhotoSwitch}
      />
    </Switch>
    <ModalRoot />
  </main>
);

export default App;
