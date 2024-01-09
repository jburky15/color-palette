import { useState } from "react"
import Head from "next/head"
import styles from '@/styles/Home.module.css'
import DisplayImage from "@/components/DisplayImage"
import ColorThief from "colorthief"

const gallery = <i className="fas fa-images"></i>

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [colorPalette, setColorPalette] = useState(null)

  const uploadImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = async (event) => {
      const img = new Image()
      img.onload = () => {
        const colorThief = new ColorThief()
        const colorPalette = colorThief.getPalette(img, 6)

        setUploadedImage(event.target.result)
        setColorPalette(colorPalette)
      }
      img.src = event.target.result
    }

    reader.readAsDataURL(file)
  }

  return (
    <>
      <Head>
        <title>Color Palette</title>
        <meta name="description" content="Get a color palette from any image!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <header>
        <h1>Palette Generator</h1>
        <div className="input">
          <label htmlFor="file">{ gallery } Upload Image</label>
          <input type="file" accept="image/*" id="file" hidden onChange={ uploadImage } />
        </div>

      </header>
      <main className={ styles.main }>
        <DisplayImage 
          uploadedImage={ uploadedImage }
          colorPalette={ colorPalette }
        />
      </main>
    </>
  )
}
