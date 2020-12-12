import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

function SEO({description, lang, meta, title, image}) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const metaDescription = description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: 'description',
                                content: metaDescription
                            },
                            {
                                name: 'robots',
                                content: data.site.siteMetadata.siteUrl
                            },
                            {
                                name: 'image',
                                content: image
                            },
                            {
                                name: 'twitter:image',
                                content: image
                            },
                            {
                                property: 'og:url',
                                content: data.site.siteMetadata.siteUrl
                            },
                            {
                                property: 'og:image',
                                content: image
                            },
                            {
                                property: 'og:title',
                                content: title
                            },
                            {
                                property: 'og:description',
                                content: metaDescription
                            },
                            {
                                property: 'og:type',
                                content: 'website'
                            },
                            {
                                name: 'twitter:card',
                                content: 'summary_large_image'
                            },
                            {
                                name: 'twitter:creator',
                                content: data.site.siteMetadata.author
                            },
                            {
                                name: 'twitter:title',
                                content: title
                            },
                            {
                                name: 'twitter:description',
                                content: metaDescription
                            }
                        ].concat(meta)}
                    />
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
