import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import MainBoard from "../components/MainBoard/MainBoard.jsx"
import MainIntro from "../components/MainIntro/MainIntro"

const IndexPage = () => (
  <Layout>
    <MainBoard />
    <MainIntro />
  </Layout>
)
export const Head = () => <Seo title="DDo Studio" />

export default IndexPage
