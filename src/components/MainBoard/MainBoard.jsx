import React from "react"
import * as styles from "./mainboard.module.css"
import { StaticImage } from "gatsby-plugin-image"

const MainBoard = () => {
  return (
    <section
      style={{ backgroundColor: "#FFF9F6" }}
      className={styles.mainboard}
    >
      <StaticImage
        alt="mainimage_title"
        src="../../images/main_title.png"
        className="mainimg"
        width={900}
        height={500}
      />
    </section>
  )
}

export default MainBoard
