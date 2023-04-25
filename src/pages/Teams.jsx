import React from 'react';
import styles from './styles/Contact.module.css';
import MemberCard from '../components/MemberCard';

const members = [1, 1, 1];

const Teams = () => {
  return (
    <container>
      <h1 id='heading'>MEET THE EXCOMM</h1>

      <div className={styles.contacts}>
        {members.map((member) => (
          <MemberCard />
        ))}
      </div>

      <h1 id='heading'>MEET THE CORE</h1>

      <div className={styles.contacts}>
        {members.map((member) => (
          <MemberCard />
        ))}
      </div>
    </container>
  );
};

export default Teams;