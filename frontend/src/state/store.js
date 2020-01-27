import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import axiosInstance from '../api';

export default createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
