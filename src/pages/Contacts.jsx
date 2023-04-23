import React from 'react';
import styles from './styles/Contact.module.css';

const Contacts = () => {
  return (
    <container>
      <h1 id='heading'>MEET THE EXCOMM</h1>

      <div className={styles.contacts}>
        <div className={styles.box}>
          <img src='https://random.imagecdn.app/500/150'></img>
          <h3>John Doe</h3>
          <p>President</p>
        </div>
        <div className={styles.box}>
          <img src='https://random.imagecdn.app/500/150'></img>
          <h3>John Doe</h3>
          <p>President</p>
        </div>
        <div className={styles.box}>
          <img src='https://random.imagecdn.app/500/150'></img>
          <h3>John Doe</h3>
          <p>President</p>
        </div>
      </div>
    </container>
  );
};

export default Contacts;
