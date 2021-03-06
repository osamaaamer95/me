module.exports = {
  siteMetadata: {
    title: 'osamaaamer',
    titleTemplate: '%s · osamaaamer',
    description: 'My personal slice of the web',
    author: '@osamaaamer95',
    siteUrl: 'https://osamaaamer.com',
    image: '/images/banner.jpg',
    twitterUsername: '@osamaaamer95',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '264545630',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
  ],
};
