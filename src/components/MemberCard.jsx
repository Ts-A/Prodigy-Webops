import React from 'react'
import styles from './MemberCard.module.css'

const MemberCard = () => {
  return (
    <div className={styles.box}>
    <img src='https://random.imagecdn.app/500/150'></img>
    <h3>John Doe</h3>
    <p>President</p>
  </div>
  )
}

export default MemberCard