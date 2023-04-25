import React from 'react';
import styles from './Footer.module.css';
import heart from '../assets/heart.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made with
      <img
      className = {styles.heart}
       src={heart} />
      by Prodigy Webops
    </div>
  );
};

export default Footer;
