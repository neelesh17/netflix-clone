import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import FaqsContainer from './containers/faqs.js';
import FooterContainer from './containers/footer.js';
import JumbotronContainer from './containers/jumbotron.js';
import ROUTES from './constants/routes';

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route exact path={ROUTES.HOME}><JumbotronContainer/></Route>
        <Route exact path={ROUTES.BROWSE}><FaqsContainer /></Route>
        </Switch>
        <FooterContainer />
      </BrowserRouter>
  );
}

export default App;