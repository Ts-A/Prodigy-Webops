import React from 'react'
import styles from './styles/Home.module.css'

const Home = () => {
  return (
    <container>
      <h1 id={styles.prodigy} >PRODIGY</h1>
      <button
      className='button-primary'
      >
        WELCOME
      </button>
    </container>
  )
}

export default Home