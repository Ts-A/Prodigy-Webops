import React from 'react';
import { useRef } from 'react';
import styles from './styles/Home.module.css';
import About from './About';
import Events from './Events';
import Contacts from './Contacts';
import arrow from '../../public/assets/arrow.svg';

const Home = () => {
  const about = useRef(null);

  const HandleScroll = () => {
    about.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <container>
      <div className={styles.title}>
        <h1 id={styles.prodigy}>PRODIGY</h1>
        <img src={arrow}></img>
      </div>
      <About ref={about} />
      <Events />
      <Contacts />
    </container>
  );
};

export default Home;
