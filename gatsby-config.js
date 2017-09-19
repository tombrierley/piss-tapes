module.exports = {
    siteMetadata: {
        title: `Piss tapes`,
        author: `Tom Brierley`
    },
    plugins: [
		'gatsby-plugin-sass',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        }
    ]
};
