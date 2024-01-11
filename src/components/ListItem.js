import React, { useState } from "react"
import styles from "../styles/Home.module.css"

const copy = <i className="far fa-copy"></i>

function ListItem({ rgb, hex }) {
  const [hexCopied, setHexCopied] = useState(false)
  const [rgbCopied, setRgbCopied] = useState(false)

  const copyToClipboard = (e) => {
    const color = e.target.innerText
    navigator.clipboard.writeText(color)
  }

  return (
    <li className={styles.colorName} style={{ background: rgb }}>
      <span
        className={styles.hexSpan}
        onClick={(e) => {
          copyToClipboard(e)
          setHexCopied(true)
          setTimeout(() => {
            setHexCopied(false)
          }, 1000)
        }}
      >
        { hexCopied ? "Copied!" : hex } { copy }
      </span>
      <span
        className={styles.rgbSpan}
        onClick={(e) => {
          copyToClipboard(e)
          setRgbCopied(true)
          setTimeout(() => {
            setRgbCopied(false)
          }, 1000)
        }}
      >
        { rgbCopied ? "Copied!" : rgb } { copy }
      </span>
    </li>
  );
}

export default ListItem;