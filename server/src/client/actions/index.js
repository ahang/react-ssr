import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
const url = 'http://react-ssr-api.herokuapp.com';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get(`http://react-ssr-api.herokuapp.com/users`);

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
}