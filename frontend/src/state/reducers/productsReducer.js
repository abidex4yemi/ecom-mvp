import { FETCH_PRODUCTS, FETCHING_PRODUCTS } from '../actions';

const initialState = {
  fetchingProducts: false,
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCHING_PRODUCTS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
