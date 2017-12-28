import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import { MainPage } from '../util/main_page_util';

import Nav from './nav/nav';
import SessionFormContainer from './session_form/session_form_container';
import UploadForm from './upload/upload_form_container';

const App = () => {
  return (
  <main>
    <Nav />
    <Switch>
      <Route
        exact path="/"
        component={MainPage}
      />
      <AuthRoute
        exact path="/:formType(login|signup)"
        component={SessionFormContainer}
      />
      {/* <Route
        exact path="/upload"
        // Navigate user to ':username/manage' and open upload modal
      /> */}
    </Switch>
    <UploadForm />
  </main>);
};

export default App;
