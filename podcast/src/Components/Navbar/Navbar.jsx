import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/faviconio-logo/logoNote.jpg';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.text}>Podcast</div>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
          </div>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
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
