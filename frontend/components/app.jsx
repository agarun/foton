import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={SessionFormContainer} />
      <Route exact path="/signup" component={SessionFormContainer} />
    </Switch>
  </main>
);

export default App;
