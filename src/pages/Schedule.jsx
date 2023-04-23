import React from 'react';
import styles from './styles/Schedule.module.css';

const Schedule = () => {
  return (
    <container>
      <h1 id="heading">SCHEDULE</h1>
      <div className={styles.timeline}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Day 1</div>
          <div className={styles.cardContent}>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Day 1</div>
          <div className={styles.cardContent}>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Day 1</div>
          <div className={styles.cardContent}>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div classname={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};

export default Schedule;
