import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import { MainPage } from '../util/main_page_util';

import Nav from './nav/nav';
import SessionFormContainer from './session_form/session_form_container';
import UserProfileContainer from './users/user_profile_container';
import ModalRoot from './modal/modal_root';
import PageNotFound from './pages/404';

const App = () => (
  <main>
    <Nav />
    <Switch>
      <Route
        exact path="/"
        component={MainPage}
      />
      <Route
        exact path="/404"
        component={PageNotFound}
      />
      <AuthRoute
        exact path="/:formType(login|signup)"
        component={SessionFormContainer}
      />
      {/* <Route
        exact path="/upload"
        // TODO: Navigate user to ':username/manage' and open upload modal
      /> */}
      <Route
        exact path="/:username"
        component={UserProfileContainer}
      />
      <Route component={PageNotFound} />
    </Switch>
    <ModalRoot />
  </main>
);

export default App;
