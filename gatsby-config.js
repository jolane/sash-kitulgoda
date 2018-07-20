module.exports = {
  siteMetadata: {
    title: `Sash Kitulgoda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `workPages`,
        path: `${__dirname}/src/work/`,
      },
    },
  ],
}
