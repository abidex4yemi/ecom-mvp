export const FETCH_PRODUCTS = 'fetch_products';
export const FETCHING_PRODUCTS = 'fetching_products';

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
