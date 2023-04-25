import React from 'react';
import styles from './styles/Schedule.module.css';

import { useRef,useEffect } from 'react';

const Events = () => {
  const box = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting ) {
          entry.target.classList.add(styles.popup);
        } else {
          entry.target.classList.remove(styles.popup);
        }
      });
    });
    

    observer.observe(box.current);

    return () => {
      observer.unobserve(box.current);
    };
  }, []);

  return (
    <div className="container" ref={box}>
      <h1 id='heading'>SCHEDULE</h1>
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
            <div className={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div className={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div className={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
            <div className={styles.slot}>
              <div>
                <h3>10:00 AM</h3>
                <p>Registration</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
