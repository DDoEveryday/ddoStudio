import React from "react"
import ProjectCard from "./ProjectCard"

// query를 여기서 불러와서 projects를 만들어야 함. => tempalte은 뭔지 한 번 알아보자.
const MainProject = ({ projects }) => {
  return (
    <section style={{ padding: "2rem 0" }}>
      {projects.map(({ title, date, Image, imagealt }) => (
        <ProjectCard
          key={title}
          title={title}
          date={date}
          image={Image}
          alt={imagealt}
        />
      ))}
    </section>
  )
}
export default MainProject
