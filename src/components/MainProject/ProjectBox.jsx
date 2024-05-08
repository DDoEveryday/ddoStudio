import { useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

export const ProjectBox = ({ title, date, image, alt }) => {
  console.log("title", title, "date", date, "image", image, "alt", alt)
  return (
    <section>
      <p>{title}</p>
      <p>{date}</p>
      <GatsbyImage alt={alt} image={getImage(image)} width={400} />
    </section>
  )
}
export default ProjectBox
