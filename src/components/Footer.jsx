import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made with
      <img className={styles.heart} src={"/assets/icons/heart.svg"} />
      by Prodigy Webops
    </div>
  );
};

export default Footer;
