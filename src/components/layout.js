import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={
          {
            // margin: `0 auto`,
            // maxWidth: `var(--size-content)`,
            // padding: `var(--size-gutter)`,
          }
        }
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          {/* © {new Date().getFullYear()} Made by 뚜에데이 */}
        </footer>
      </div>
    </>
  )
}

export default Layout
