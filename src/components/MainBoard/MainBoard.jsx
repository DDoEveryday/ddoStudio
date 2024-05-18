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
      />
      {/* <article className={styles.mainarticle}>
        <p
          style={{ fontSize: "var(--font-sm)" }}
          // className={styles.subtitle}
        >
          코딩은...귀엽다?
        </p>
        <p className={styles.subtitle}>
          <span style={{ color: "#da484f", fontWeight: "bold" }}>R</span>
          <span style={{ color: "#4dae5c", fontWeight: "bold" }}>G</span>
          <span style={{ color: "#4278ca", fontWeight: "bold" }}>B</span>{" "}
          동물들과 함께하는 개발 공부
        </p>
        <p style={{ color: "brown" }} className={styles.title}>
          뚜에데이 블로그
        </p>
      </article> */}
      {/* 얘는 header넣기 */}
      {/* <nav className={styles.navgroup}>
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
      </nav> */}
    </section>
  )
}

export default MainBoard
