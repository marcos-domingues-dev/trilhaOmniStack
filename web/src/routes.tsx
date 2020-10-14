import React from 'react';

/* Alguns pacorees não trazem auto complete ... */
/* $ yarn add @types/react-router-dom -D  */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanegesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanegesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;