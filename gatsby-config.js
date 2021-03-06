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
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-GTXNW8CEQB`,
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layouts/ArticleLayout.tsx'),
        },
      },
    },
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
