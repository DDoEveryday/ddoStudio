/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `뚜에데이 스튜디오`,
    description: `그림과 개발 공간`,
    author: `@DDoEDay`,
    siteUrl: `https://ddostudio.netlify.app/`,
    image: "https://ddostudio.netlify.app/static/mainImg.png",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "project",
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-image`,
      options: {
        fadeIn: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-710x710.png`,
      },
    },
  ],
}
