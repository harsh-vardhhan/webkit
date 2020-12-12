import React from 'react';
import {Link, graphql} from 'gatsby';

import BlogLayout from '../components/BlogLayout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import {rhythm, scale} from '../utils/typography';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const {previous, next} = this.props.pageContext;
        const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

        return (
            <BlogLayout
                location={this.props.location}
                title={siteTitle}
            >
                <SEO
                    title={post.frontmatter.title}
                    description={post.excerpt}
                    image={featuredImgFluid.src}
                />
                <h1>{post.frontmatter.title}</h1>
                <Img fluid={featuredImgFluid}/>
                <p
                    style={{
                        ...scale(-1 / 5),
                        display: 'block',
                        marginBottom: rhythm(1),
                        marginTop: rhythm(-1)
                    }}
                >
                    {post.frontmatter.date}
                </p>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
                <hr
                    style={{
                        marginBottom: rhythm(1)
                    }}
                />

                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        padding: 0
                    }}
                >
                    <li>
                        {previous && (
                            <Link
                                to={previous.fields.slug}
                                rel='prev'
                            >
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link
                                to={next.fields.slug}
                                rel='next'
                            >
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </BlogLayout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
