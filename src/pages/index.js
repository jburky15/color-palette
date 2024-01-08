import Head from "next/head"
import styles from '@/styles/Home.module.css'

const gallery = <i className="fas fa-images"></i>

export default function Home() {
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
          <input type="file" id="file" hidden />
        </div>

      </header>
      <main className="{styles.main}">
        
      </main>
    </>
  )
}
