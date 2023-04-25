import React from 'react';
import styles from './MemberCard.module.css';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedIn.svg';

const MemberCard = (props) => {
  return (
    <div className={styles.box}>
      <img src={
        `./src/assets/contacts/${props.img}.jpg`
      } alt='member'></img>
      <h3>{props.name}</h3>
      <p>{props.position}</p>
      <div className={styles.contact}>
        <a href={props.linkedin}>
          <img src={linkedin} alt='linkedin'></img>
        </a>
        ({props.mobileNumber})
        <a href={`mailto:name@${props.email}`}>
          <img src={mail} alt='mail'></img>
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
