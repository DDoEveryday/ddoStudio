import React from "react"
import * as styles from "./mainboard.module.css"
import { StaticImage } from "gatsby-plugin-image"
import InstagramIcon from "@mui/icons-material/Instagram"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import CreateIcon from "@mui/icons-material/Create"

const MainBoard = () => {
  return (
    <section className={styles.mainboard}>
      <StaticImage
        alt="mainimage"
        src="../../images/mainImg.png"
        // width값이 모니터 해상도에 따라 동작될 때가 있고 안될 때가 있음
        className="mainimg"
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
