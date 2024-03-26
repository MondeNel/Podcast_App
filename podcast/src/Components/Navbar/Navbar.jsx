import React from 'react';
import styles from './Navbar.module.css'; 
import Search from './Search';
import logoNote from '../../assets/faviconio-logo/logoNote.jpg'

const Navbar = () => {
  return (
    <div className={styles.topnav}> 
      <a className={styles.active} href="#home">
        <img src={logoNote} alt="Logo" className={styles.logo} /> 
        <h2 className={styles.title}>Moonshoot3000</h2>
      </a>
      <Search />
    </div>
  );
};

export default Navbar;
