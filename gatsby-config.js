module.exports = {
  siteMetadata: {
    title: `Trafflab Academy`,
    siteUrl: `https://luxury-smakager-89e9c5.netlify.app`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        serialize: () => ([{
          url: './',
          lastmod: new Date(),
        }])
      }
    },
  // {
  //   resolve: 'gatsby-plugin-manifest',
  //   options: {
  //     "icon": "src/images/opening/coin-1.png"
  //   }
  // },
  "gatsby-transformer-remark", 
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/images/`
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-H8VY8JJWKJ",
      ],
      pluginConfig: {
        head: false,
        respectDNT: false,
      },
    },
  },
]
};