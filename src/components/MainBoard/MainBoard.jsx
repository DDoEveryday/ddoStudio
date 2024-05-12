import React from "react"
import * as styles from "./mainboard.module.css"
import { StaticImage } from "gatsby-plugin-image"
import InstagramIcon from "@mui/icons-material/Instagram"
import CreateIcon from "@mui/icons-material/Create"

const MainBoard = () => {
  return (
    <section className={styles.mainboard}>
      <StaticImage
        alt="mainimage"
        src="../../images/mainImg.png"
        className="mainimg"
        width={500}
      />
      <article className={styles.mainarticle}>
        <p className={styles.subtitle}> 코딩은...귀엽다? </p>
        <p className={styles.title}>뚜에데이 스튜디오</p>
        <nav className={styles.navgroup}>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/ddoeday"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://ddoeveryday.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.blog}
              >
                <CreateIcon />
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  )
}

export default MainBoard
