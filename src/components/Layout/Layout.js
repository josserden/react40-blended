import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar';

function Layout(props) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

Layout.propTypes = {};

export default Layout;
