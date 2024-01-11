import React from "react";
import styles from "../styles/Home.module.css";
import ListItem from "./ListItem";
import Image from "next/image";

function DisplayImage({ uploadedImage, colorPalette }) {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16).toUpperCase();
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImage ? (
          <Image src={uploadedImage} width={500} height={500} alt="uploaded" />
        ) : (
          <h2>Select an image in the top right</h2>
        )}
      </div>
        <h4>Click on the hex or rgb value to copy their value to your clipboard</h4>
      {colorPalette && (
        <ul className={styles.colors}>
          {colorPalette.map((color, idx) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;

            return <ListItem key={idx} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default DisplayImage;
