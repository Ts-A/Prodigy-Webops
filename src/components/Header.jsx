import React from 'react';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <nav>
      <a href='/'>
      <h1 className={styles.title}>Prodigy</h1>
      </a>
      <div className={styles.content}>
        <a href='/about'>
          <div>About</div>
        </a>
        <a href='/schedule'>
          <div>Schedule</div>
        </a>
        <a href='/contact'>
          <div>Contact</div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
