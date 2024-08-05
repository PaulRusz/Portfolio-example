import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

const Layout = ({ children }) => {
  return (
    <>
      <html>
        <body>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;