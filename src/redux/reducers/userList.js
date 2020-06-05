import initialState from '../initialState';
import * as actionTypes from '../actions/types';

const userList = (state = initialState.userList, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_LIST: 
      return action.userList || [];
    default:
      return state;
  }
}

export default userList;
