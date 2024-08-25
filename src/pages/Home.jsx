import React, { useRef } from "react";
import About from "./About";
import Contacts from "./Contacts";
import Events from "./Events";
import styles from "./styles/Home.module.css";

const Home = () => {
  const about = useRef(null);

  const HandleScroll = () => {
    about.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <container>
      <div className={styles.title}>
        <h1 id={styles.prodigy}>PRODIGY</h1>
        <img src="/assets/icons/arrow.svg"></img>
      </div>
      <About ref={about} />
      <Events />
      <Contacts />
    </container>
  );
};

export default Home;
