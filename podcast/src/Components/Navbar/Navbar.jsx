import React from 'react';
import styles from './Navbar.module.css'; 
import Search from './Search';
import { Home, ContactMail, Info } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className={styles.topnav}> 
      <a className={styles.active} href="#home">
        <Home /> {/* Home icon */}
        Home
      </a>
      <a href="#contact">
        <ContactMail /> {/* Contact icon */}
        Contact
      </a>
      <a href="#about">
        <Info /> {/* About icon */}
        About
      </a>
      <Search />
    </div>
  );
};

export default Navbar;
