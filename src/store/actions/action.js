export const FETCH_EVENTS   = 'FETCH_EVENTS';
export const FETCH_FAVS   = 'FETCH_FAVS';
export const FETCH_USER   = 'FETCH_USER';

export const fetchProductsBegin = (payload) => ({
    type: FETCH_EVENTS,
    payload: payload
});
  

export const fetchFavs = (payload) => ({
    type: FETCH_FAVS,
    payload: payload
});

export const fetchUser = (payload) => ({
  type: FETCH_USER,
  payload: payload
});