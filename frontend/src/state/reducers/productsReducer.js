import {
  FETCH_PRODUCTS,
  FETCHING_PRODUCTS,
  ADDING_PRODUCT,
  CREATE_PRODUCT
} from '../actions';

const initialState = {
  fetchingProducts: false,
  addingProduct: false,
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
    case ADDING_PRODUCT:
      return {
        ...state,
        ...action.payload.addingProduct
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product]
      };
    default:
      return state;
  }
};
