import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./projectCard.module.css"

export const ProjectCard = ({ title, date, image, alt }) => {
  console.log("title", title, "date", date, "image", image, "alt", alt)
  return (
    <section className={styles.projectCard}>
      <article>
        <p>{title}</p>
        <p>{date}</p>
        <GatsbyImage alt={alt} image={getImage(image)} width={400} />
      </article>
      <article>
        <p>
          My Daily Look은 성인들도 즐길 수 있는 심플 캐쥬얼 옷입히기 게임입니다.
        </p>
        <p>
          자신의 옷장에 있는 옷들을 직접 입어보지 않고 어플로 코디해볼 수 있고,{" "}
        </p>
        <p>
          쇼핑몰에서 옷을 구매하기 전에 간단한 조작을 통해 옷을 매칭해볼 수
          있어요!
        </p>
      </article>
      {/* game play video */}
    </section>
  )
}
export default ProjectCard
