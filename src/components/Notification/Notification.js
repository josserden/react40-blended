import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ text }) => {
  return <h2 className={s.Notification}>{text}</h2>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
