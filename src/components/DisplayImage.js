import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import ListItem from './ListItem'

function DisplayImage({ uploadedImage, colorPalette }) {
  const toHex = (rgb) => {
    let hexVal = Number(rgb).toString(16)
    if (hexVal.length < 2) {
      hexVal = "0" + hexVal;
    }
    return hexVal
  }

  return (
    <div className={styles.content}>
        <div className='image'>
            { uploadedImage ? <Image src={ uploadedImage } width={500} height={500} alt='uploaded' /> : <h2>Select an image in the top right</h2>}
        </div>

        { 
          colorPalette && 
          <ul>
            { colorPalette.map((color, idx) => {
              const rgb = `RGB: (${color.join(", ")})`
              const hex = `HEX: #${ toHex(color[0]) }${ toHex(color[1]) }${ toHex(color[2]) }`
              return <h3 key={ idx }>{ rgb } { hex }</h3>
            })}
          </ul> 
        }
    </div>
  )
}

export default DisplayImage