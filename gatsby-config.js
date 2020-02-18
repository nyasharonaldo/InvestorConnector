require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Investor Connector`,
    description: `Social network for investors to share research and collaborate`,
    author: `Nyasha Ronaldo Mutangadura`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}