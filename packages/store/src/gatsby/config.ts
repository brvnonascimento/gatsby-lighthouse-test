import { GatsbyConfig } from 'gatsby'

const title = 'Lighthouse Test'

const config: GatsbyConfig = {
  siteMetadata: {
    title: title,
    siteUrl: 'http://lighthouse-test.com/'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-preact',
    'gatsby-transformer-sharp',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    //     // Set Variation ID. 0 for original 1,2,3....
    //     variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
    //     // Defers execution of google analytics script after page load
    //     defer: true,
    //     cookieDomain: process.env.GOOGLE_ANALYTICS_COOKIE_DOMAIN
    //   }
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: 'lighthouse',
        start_url: '/',
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: 'standalone',
        icon: 'src/images/favicon.svg'
      }
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: path.resolve(__dirname, '../pages/')
    //   }
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: path.resolve(__dirname, '../images/')
    //   }
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
}

export default config
