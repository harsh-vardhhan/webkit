module.exports = {
    siteMetadata: {
        title: 'Site Name',
        author: 'Site Author',
        description: 'Default Page Description Goes Here',
        siteUrl: 'https://www.website.com'
    },
    pathPrefix: '/gatsby-paginated-blog',
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-TRACKING-ID',
                head: true,
                anonymize: true
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/blog`,
                name: 'blog'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content/assets`,
                name: 'assets'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem'
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-feed',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Gatsby Starter Blog',
                short_name: 'GatsbyJS',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'content/assets/icon.jpg'
            }
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.website.com',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://www.website.com'
            }
        },
        'gatsby-plugin-sitemap'
    ]
};
