
module.exports = {
  siteMetadata: {
    title: 'Arushi Aggarwal',
    description: 
    'Hi! This is my personal website :)',
    siteUrl: 'https://arushi-portfolio.netlify.app',
    image: 'src\img\me.jpg'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static-con`,
        path: `${__dirname}/static-content/`,
      },
    },


    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "8zirrklc", 
        dataset: "production",
        apiVersion: "2023-01-01",
        useCdn: true,
      },
    },
  ],
};

