import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/faviconio-logo/logoNote.jpg';
import styles from './Navbar.module.css'; 
import Search from './Search'; // Import the Search component

const Navbar = () => {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.text}>Podcast</div>
        <Search /> 
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
