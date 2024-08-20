import React from 'react';
import styles from './styles/Events.module.css';

const Events = () => {
  return (
    <div className='container'>
      <h1 id='heading'>SCHEDULE</h1>
      <h2 className={styles.h2}>
        DAY 1 <hr></hr> <div>26/05/2023</div>
      </h2>
      <div className={styles.Box}>
        <div className={styles.cardTitle}>INAGURATION</div>
        <div>
          <p>
            Prodigy, the flagship annual symposium of Department of Production
            Engineering is back again with yet another breath-taking edition.
            Team Prodigy cordially invites the entire student fraternity to the
            Inauguration Ceremony for the year 2023. Among the academic
            stalwarts gracing the dais, we have Mr. K. Ravindran, the General
            Manager of Advanced Technology Products at BHEL Trichy as the Chief
            Guest, Dr G. Aghila, Director of NIT Trichy, Dr C. Sathiya
            Narayanan, the Head of the Department of Production Engineering as
            the Guest of Honour, and Dr D. Lenin Singaravelu, the Faculty
            Advisor for the PEA 2023.
          </p>
          <p>
            Join us at the Barn Hall tomorrow, the 26th of April 2023, at 1.30
            PM IST to display an unprecedented vigour!
          </p>
        </div>
      </div>
      <h2 className={styles.h2}>
        DAY2 <hr></hr> <div>27/05/2023</div>
      </h2>
      <div className={styles.timeline}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            Decode the Design: A 3D Graphics Challenge
          </div>
          <div className={styles.cardContent}>
            <div classname={styles.slot}>
              <div>
                <p>
                  This event is for those interested in the field of engineering
                  graphics. This challenge is designed to test the spatial
                  visualisation skills and the ability to read and interpret
                  engineering drawings.
                </p>
              </div>
              <div className={styles.details}>
                <h5>Time : 9:00AM</h5>
                <h5>Venue : CS EG Hall</h5>
              </div>
              <div className={styles.register}>
                <button
                  onClick={() => {
                    window.location.href =
                      'https://forms.gle/KawSGdepkduyGGyu7';
                  }}
                >
                  Register
                </button>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Factory Frenzy</div>
          <div className={styles.cardContent}>
            <div classname={styles.slot}>
              <div>
                <p>
                  Fun Quiz related to Manufacturing processes with riddles
                  .Questions will be from material science and other
                  manufacturing process which will be indirectly linked with
                  movies or situations.
                </p>
              </div>
              <div className={styles.details}>
                <h5>Time : 11:00AM</h5>
                <h5>Venue : Third I</h5>
              </div>
              <div className={styles.register}>
                <button
                  onClick={() => {
                    window.location.href =
                      'https://forms.gle/MVHUHGcDap1fAvfx5';
                  }}
                >
                  Register
                </button>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Teardown Tussle</div>
          <div className={styles.cardContent}>
            <div classname={styles.slot}>
              <div>
                <p>
                  This is a research and design event where you will have to
                  find the various parts in the given daily life product, which
                  we use regularly but never have wondered about their
                  functionality, and make a CAD model of the whole assembly.
                </p>
              </div>
              <div className={styles.details}>
                <h5>Time : 3:00PM</h5>
                <h5>Venue : Third I</h5>
              </div>
              <div className={styles.register}>
                <button
                  onClick={() => {
                    window.location.href =
                      'https://forms.gle/1yAdU1SdTHhKgWA86';
                  }}
                >
                  Register
                </button>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className={styles.Box}>
        <div className={styles.cardTitle}>VALEDITION</div>
        <div>
          <p>
            Join us at the Barn Hall tomorrow, the 26th of April 2023, at 5:00PM
            PM IST for the Velediction Ceremony for the Prodigy year 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
