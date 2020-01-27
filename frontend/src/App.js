import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductPage from './pages/ProductsPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductPage} />
    </Switch>
  );
};

export default App;
