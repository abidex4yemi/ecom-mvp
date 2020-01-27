import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductPage from './pages/ProductsPage';
import AddProductPage from './pages/AddProductPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductPage} />
      <Route exact path="/add-product" component={AddProductPage} />
    </Switch>
  );
};

export default App;
