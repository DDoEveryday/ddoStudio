import React from "react"
import ProjectBox from "./ProjectBox"
import { graphql } from "gatsby"

// query를 여기서 불러와서 projects를 만들어야 함. => tempalte은 뭔지 한 번 알아보자.
const MainProject = ({ projects }) => {
  return (
    <section>
      <p>뚜에블뎅의 예쁜 작품</p>
      {projects.map(({ title, date, Image, imagealt }) => (
        <ProjectBox key={title} title={title} date={date} image={Image} alt={imagealt} />
      ))}
    </section>
  )
}
export default MainProject
