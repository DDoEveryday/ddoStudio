import React from "react"
import * as styles from "./mainboard.module.css"
import { StaticImage } from "gatsby-plugin-image"

const MainBoard = () => {
  return (
    <section className={styles.mainboard}>
      <StaticImage
        alt="mainimage"
        src="../../images/mainImg.png"
        // width값이 모니터 해상도에 따라 동작될 때가 있고 안될 때가 있음
        className="mainimg"
        width={500}
      />
      <article className={styles.mainarticle}>
        <p className={styles.subtitle}> 코딩은...귀엽다? </p>
        <p className={styles.title}>뚜에데이 스튜디오</p>
      </article>
    </section>
  )
}

export default MainBoard
