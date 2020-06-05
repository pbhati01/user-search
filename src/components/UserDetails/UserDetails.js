import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { createUseStyles } from 'react-jss';
import styles from './UserDetails.styles';

const useStyles = createUseStyles(styles);

const UserDetails = ({ user: { id, name, username, email, website }, handleClose }) => {
  const classes = useStyles();
  return (
    <>
      <CSSTransition in={!!id} unmountOnExit timeout={500} classNames={{
        enter: classes.animateModalEnter,
        enterActive: classes.animateOverlayEnterActive,
        exit: classes.animateOverlayExit,
        exitActive: classes.animateModalExitActive,
      }}>
        <div className={classnames(classes.backgroundOverlay)}></div>
      </CSSTransition>
      <CSSTransition in={!!id} unmountOnExit timeout={500} classNames={{
        enter: classes.animateModalEnter,
        enterActive: classes.animateModalEnterActive,
        exit: classes.animateModalExit,
        exitActive: classes.animateModalExitActive,
      }}>
        <section className={classnames(classes.userDetailsContainer)}>
          <h5>User Details</h5>
          <ul className="green-blue-list">
            <li className="green-blue-list-item listing">
              <span>Name: </span>
              <strong>{name}</strong>
            </li>
            <li className="green-blue-list-item listing">
              <span>Username: </span>
              <strong>{username}</strong>
            </li>
            <li className="green-blue-list-item listing">
              <span>Email: </span>
              <strong>{email}</strong>
            </li>
            <li className="green-blue-list-item listing">
              <span>Website: </span>
              <strong><a rel="noopener noreferrer" target="_blank" href={website}>{website}</a></strong>
            </li>
          </ul>
          <button
            onClick={handleClose}
            className={classnames(classes.closeBtn, 'btn-outline btn-md')}
          >
            Close
          </button>
        </section>
      </CSSTransition>
    </>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object,
  handleClose: PropTypes.func,
};
UserDetails.defaultProps = {
  user: {},
  handleClose: () => {},
};

export default UserDetails;