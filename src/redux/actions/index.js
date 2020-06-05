import * as types from './types';
import * as api from '../../api';
export const setUserList = userList => ({
  type: types.SET_USER_LIST,
  userList
});

export const fetchUserList = () => {
  return (dispatch) => {
    api.fetchUserList()
      .then(({ status, data }) => {
        if (status === 200) {
          dispatch(setUserList(data.slice(0, 5)));
        }
      })
      .catch((error) => {
        console.log('catch fetchUserList error', error);
      });
  };
};
