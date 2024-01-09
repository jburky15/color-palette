import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"

function DisplayImage({ uploadedImage, colorPalette }) {
  return (
    <div className={styles.content}>
        <div className='image'>
            { uploadedImage ? <Image src={ uploadedImage } width={500} height={500} alt='uploaded' /> : <h2>Select an image in the top right</h2>}
        </div>

        { 
          colorPalette && 
          <ul>
            { colorPalette.map((color, idx) => {
              return  <h3 key={ idx }>RGB: { color }</h3>;
            })}
          </ul> 
        }
    </div>
  )
}

export default DisplayImage