import React from 'react';
import { Audio } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <>
      <Audio color="#00BFFF" height={80} width={80} />
    </>
  );
};

export default Spinner;
