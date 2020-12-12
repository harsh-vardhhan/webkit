import React from 'react';
import {Link, graphql} from 'gatsby';

import SEO from '../components/seo';
import BlogLayout from '../components/BlogLayout';
import {rhythm} from '../utils/typography';

class BlogIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                pathname: ''
            }
        };
    }

    render() {
        const {data} = this.props;
        const posts = data.allMarkdownRemark.edges;
        const {currentPage, numPages} = this.props.pageContext;
        const isFirst = currentPage === 1;
        const isLast = currentPage === numPages;
        const prevPage = currentPage - 1 === 1 ? '/blog' : (currentPage - 1).toString();
        const nextPage = (currentPage + 1).toString();

        return (
            <BlogLayout>
                <SEO
                    title={'Blog'}
                    image={require(`../images/card.jpg`)}
                />
                {posts.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug;
                    return (
                        <div key={node.fields.slug}>
                            <h3
                                style={{
                                    marginBottom: rhythm(1 / 4)
                                }}
                            >
                                <Link
                                    style={{boxShadow: 'none'}}
                                    to={node.fields.slug}
                                >
                                    {title}
                                </Link>
                            </h3>
                            <p>{node.frontmatter.date}</p>
                            <img
                                style={{
                                    width: '100%'
                                }}
                                alt='seo-pipes'
                                src={require(`../../content/blog${node.fields.slug}preview.jpg`)}
                            />
                            <p>{node.frontmatter.description}</p>
                            <Link
                                to={node.fields.slug}
                                style={{textDecoration: 'none'}}
                            >
                                <button>{'Continue Reading'}</button>
                            </Link>
                            <br/>
                            <hr/>
                        </div>
                    );
                })}
                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        listStyle: 'none',
                        padding: 0
                    }}
                >
                    {!isFirst && (
                        <Link
                            to={prevPage}
                            rel='prev'
                            style={{color: 'transparent'}}
                        >
                            <h6>⬅️ Previous Page</h6>
                        </Link>
                    )}
                    {!isLast && (
                        <Link
                            to={nextPage}
                            rel='next'
                            style={{color: 'transparent'}}
                        >
                            <h6>Next Page ➡️</h6>
                        </Link>
                    )}
                </ul>
            </BlogLayout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
