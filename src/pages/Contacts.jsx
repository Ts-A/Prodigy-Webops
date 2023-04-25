import React from 'react';
import styles from './styles/Contact.module.css';
import MemberCard from '../components/MemberCard';

const members = [1, 1, 1];

const Contacts = () => {
  return (
    <div className="container">
      <h1 id='heading'>CONTACTS</h1>

      <div className={styles.contacts}>
        {members.map((member) => (
          <MemberCard />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
