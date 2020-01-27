export const FETCH_PRODUCTS = 'fetch_users';

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
