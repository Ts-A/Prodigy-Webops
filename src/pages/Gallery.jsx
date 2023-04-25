import React from 'react'
import styles from './styles/Gallery.module.css'

const Gallery = () => {
  return (
    <wrapper>
      <div id="heading">Gallery</div>
      <div className={styles.gallery}>
     {
       Array.apply(null, Array(20)).map((item) => {
          return (
              <img src={`https://picsum.photos/${Math.floor(3+Math.random()*3)*100}/${Math.floor(2+Math.random()*3)*100}`}/>
          )
       })
     }
        
      </div>
    </wrapper>

  )
}

export default Gallery
