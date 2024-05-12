import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./mainintro.module.css"
import React from "react"

const MainIntro = () => {
  return (
    <section className={styles.section}>
      <StaticImage
        alt="profile"
        className={styles.profile}
        src="../../images/profile__main.jpeg"
      />
      <section className={styles.subsection}>
        <article className={styles.article}>
          <p>뚜에데이는 누구인가?</p>
          <p>
            안녕하세요! 일러스트가 돋보이는 게임을 제작하는 1인 개발자
            뚜에데이입니다!
          </p>
          <p>저는 취미로 그림그리는 것을 참 좋아했는데요…!</p>
          <p>
            회사를 다니며 개발만하던 중에 ‘왜 사람들은 코딩은 멋있고 한편으론
            따분한 것으로 인식하는 걸까? 멋진 코딩은 있지만 예쁜 코딩이라는 말은
            잘 사용되지 않아… 코딩이 예쁠 순 없을까?’
          </p>
          <p>
            라는 생각으로 저는 취미생활이었던 그림그리기와 코딩을 결합해보기로
            결심했습니다!
          </p>
        </article>
        <article className={styles.article}>
          <p>뚜에데이의 비전</p>
          <p>
            저는 앞으로 일러스트레이터가 돋보이는 소프트웨어를 제작하고 싶어요.
          </p>
          <p>현재는 게임 개발로 방향성이 잡혀있어요!</p>
          <p>
            향후엔 그림을 정말 멋지게 그리시는 일러스트레이터 분들 또는 멋진
            개발을 하시는 개발자 분들과 협업을 해보고 싶어요. 😎
          </p>
          <p>
            더 나아가 일러스트레이터 분들이 자신만의 그림이 등장하는 게임이나
            다른 소프트웨어를 만들 수 있도록 돕는 일 또한 해보고 싶습니다. 😆
          </p>
        </article>
      </section>
    </section>
  )
}

export default MainIntro
