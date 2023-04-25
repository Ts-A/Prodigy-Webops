import React from 'react';
import styles from './styles/Contact.module.css';
import MemberCard from '../components/MemberCard';

const members = [
  {
    name: 'Ketki Singh',
    position: 'Overall Coordinator',
    img: '1',
    linkedin: '',
    email: 'singhketki260@gmail.com',
    mobileNumber: '91+ 99326 32755',
  },
  {
    name: 'Thanikai Sathiyan',
    position: 'Chairperson',
    img: '2',
    linkedin: 'https://www.linkedin.com/in/thanikai-sathiyan-s',
    email: 'stsathiyan.nitt@gmail.com',
    mobileNumber: '91+ 97900 06962',
  },
  {
    name: 'Yuvaraja T',
    position: 'Treasurer',
    img: '3',
    linkedin: '',
    email: 't.yuvaraja01@gmail.com',
    mobileNumber: '91+ 91503 64178',
  },
];

const Teams = () => {
  return (
    <container>
      <h1 id='heading'>MEET THE EXCOMM</h1>

      <div className={styles.contacts}>
        {members.map((member) => (
          <MemberCard
            name={member.name}
            position={member.position}
            img={member.img}
            linkedin={member.linkedin}
            email={member.email}
            mobileNumber={member.mobileNumber}
          />
        ))}
      </div>
    </container>
  );
};

export default Teams;
