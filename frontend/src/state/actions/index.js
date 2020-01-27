export const FETCH_PRODUCTS = 'fetch_products';
export const FETCHING_PRODUCTS = 'fetching_products';
export const ADDING_PRODUCT = 'adding_product';
export const CREATE_PRODUCT = 'create_product';
export const FETCH_CATEGORIES = 'fetch_categories';

export const fetchProducts = () => (dispatch, getState, api) => {
  dispatch({
    type: FETCHING_PRODUCTS,
    payload: { fetchingProduct: true }
  });

  return api
    .get('/products')
    .then(res => {
      dispatch({
        type: FETCHING_PRODUCTS,
        payload: { fetchingProduct: false }
      });

      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data.body.products
      });

      return res;
    })
    .catch(err => err);
};

export const addProduct = product => (dispatch, getState, api) => {
  dispatch({
    type: ADDING_PRODUCT,
    payload: { addingProduct: true }
  });

  return api
    .post('/products', product)
    .then(res => {
      dispatch({
        type: ADDING_PRODUCT,
        payload: { addingProduct: false }
      });

      dispatch({
        type: CREATE_PRODUCT,
        payload: {
          product: res.data.body
        }
      });

      return res;
    })
    .catch(err => err);
};

export const fetchCategories = () => (dispatch, getState, api) => {
  return api
    .get('/categories')
    .then(res => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data.body.categories
      });

      return res;
    })
    .catch(err => err);
};
