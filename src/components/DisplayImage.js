import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"

function DisplayImage({ uploadedImage, colorPalette }) {
  return (
    <div className={styles.content}>
        <div className='image'>
            { uploadedImage ? <Image src={ uploadedImage } width={500} height={500} alt='uploaded' /> : <h2>Put an image here...</h2>}
        </div>
    </div>
  )
}

export default DisplayImage