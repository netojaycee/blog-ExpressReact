// Layout.js
import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='mx-auto w-11/12'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
