import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module
import Search from './Search';

const Navbar = () => {
  return (
    <div className={styles.topnav}> {/* Use the CSS class from the module */}
      <a className={styles.active} href="#home">Podcast 3000</a> {/* Use the CSS class from the module */}
      <Search />
    </div>
  );
};

export default Navbar;
