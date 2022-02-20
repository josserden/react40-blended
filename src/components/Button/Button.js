import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ text, onLoadClick }) => {
  return (
    <button className={s.btnLoadMore} type="button" onClick={onLoadClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onLoadClick: PropTypes.func,
};

export default Button;
