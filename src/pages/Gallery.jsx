import React from 'react'
import styles from './styles/Gallery.module.css'

const Gallery = () => {
  return (
    <wrapper>
      <div id="heading">Gallery</div>
      <div className={styles.gallery}>
     {
        [...Array(8)].map((e, i) => {
          return (
            <div className={styles.box} key={i}>
              <img
                src={`./public/assets/gallery/${i+1}.jpeg`}
                alt='gallery'
                className={styles.img}
              ></img>
            </div>
          )
        }
        )

     }
        
      </div>
    </wrapper>

  )
}

export default Gallery
