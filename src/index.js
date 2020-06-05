import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/storeSetup';
import UserSearch from './components/UserSearch';

ReactDOM.render((
  <Provider store={store}>
    <UserSearch />
  </Provider>
), document.getElementById('root'));
