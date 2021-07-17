/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-con`,
        path: `${__dirname}/static-content`
      }
    },
    `gatsby-transformer-remark`,
  ],
  siteMetadata:{
  }
}
