module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Redan Jams',
        short_name: 'Redan Jams',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#2BB3A5',
        display: 'standalone',
        icon: 'src/images/musician.svg',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `songs`,
        path: `${__dirname}/songs/`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
