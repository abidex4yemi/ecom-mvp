export const FETCH_PRODUCTS = 'fetch_products';

export const fetchProducts = () => (dispatch, getState, api) => {
  return api
    .get('/products')
    .then(res => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res
      });

      return res;
    })
    .catch(err => err);
};
