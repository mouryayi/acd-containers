const siteTitle = 'IBM Watson Annotator for Clinical Data'

var sitePrefix = process.env.SITE_PREFIX || "/"
console.log(`Using SITE_PREFIX: '${sitePrefix}'`)

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: 'IBM Watson Annotator for Clinical Data on Kubernetes Runbook',
    keywords: 'ibm,acd,containers',
  },
  pathPrefix: sitePrefix,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: sitePrefix,
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
        icon: 'node_modules/gatsby-theme-carbon/src/images/favicon.svg'
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        withWebp: true,
        imageQuality: 75,
      },
    },
  ],
};
