import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, Browse, Signin, Signup } from './pages';
import ROUTES from './constants/routes';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME}><Home /></Route>
          <Route exact path={ROUTES.BROWSE}><Browse /></Route>
          <Route exact path={ROUTES.SIGN_IN}><Signin /></Route>
          <Route exact path={ROUTES.SIGN_UP}><Signup /></Route>
        </Switch>
        
      </BrowserRouter>
  );
}

export default App;