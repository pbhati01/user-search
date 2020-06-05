import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { fetchUserList } from '../../redux/actions';
import { getUserList } from '../../redux/selectors';
import UserDetails from '../UserDetails';
import styles from './UserSearch.styles';

const useStyles = createUseStyles(styles);

const UserSearch = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState({});
  const userList = useSelector(getUserList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value.trim());
  };
  const handleUserClick = (user) => setSelectedUser(user);
  const handleClose = () => setSelectedUser({});
  const renderSearchForm = () => {
    let filteredUserList = userList;
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filteredUserList = userList.filter(({ name }) =>
        (name.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1));
    }
    return (
      <>
        <h5 className={classes.marginBottom}>Search</h5>
        <input
          type="text"
          placeholder="Search by name"
          className={classnames(classes.marginBottom, 'input-primary input-md')}
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <h5 className={classes.marginBottom}>Results</h5>
        <ul className="green-blue-list">
          <TransitionGroup>
            {filteredUserList.length > 0 && filteredUserList.map(user => (
              <CSSTransition unmountOnExit key={user.id} timeout={500} classNames={{
                enter: classes.animateListEnter,
                enterActive: classes.animateListEnterActive,
                exit: classes.animateListExit,
                exitActive: classes.animateListExitActive,
              }}>
                <li
                  className={classnames(classes.listItem, 'green-blue-list-item listing')}
                  onClick={() => handleUserClick(user)}
                >
                  {user.name}
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {filteredUserList.length === 0 && <p>No results</p>}
        </ul>
      </>
    );
  };
  return (
    <section className={classnames(classes.userSearchContainer, 'styleguide-content shadow-01dp', {
      'menu-overlay-open': !!selectedUser
    })}>
      {renderSearchForm()}
      <UserDetails user={selectedUser} handleClose={handleClose} />
    </section>
  );
};

export default UserSearch;