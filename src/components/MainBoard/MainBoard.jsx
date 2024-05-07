import React from "react"
import * as styles from "./mainboard.module.css"
import { StaticImage } from "gatsby-plugin-image"

const MainBoard = props => {
  return (
    <section className={styles.mainboard}>
      <StaticImage
        src="../../images/mainImg.png"
        width={500}
        className="mainimg"
      />
      <article className={styles.mainarticle}>
        <p className={styles.subtitle}> 코딩은...귀엽다? </p>
        <p className={styles.title}>뚜에블뎅 스튜디오</p>
      </article>
    </section>
  )
}

export default MainBoard
