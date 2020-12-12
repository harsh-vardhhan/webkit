import React from 'react';
import {Link} from 'gatsby';
import Header from './Header';

import {rhythm, scale} from '../utils/typography';

class BlogLayout extends React.Component {
    render() {
        const {location, title, children} = this.props;
        const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;
        const pageNumber = location.pathname.
            split('/').
            filter(Boolean).
            pop();
        const isPaginatedPath = pageNumber && Boolean(pageNumber.match(/^[0-9]+$/));
        let header;

        if (isRootPath || isPaginatedPath) {
            header = (
                <h1
                    style={{
                        ...scale(1.5),
                        marginBottom: rhythm(1.5),
                        marginTop: 0
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                        to={'/'}
                    >
                        {title}
                    </Link>
                </h1>
            );
        } else {
            header = (
                <h1
                    style={{
                        marginTop: 0
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                        to={'/'}
                    >
                        {title}
                    </Link>
                </h1>
            );
        }
        return (
            <>
                <Header/>
                <div
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: rhythm(24),
                        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
                    }}
                >
                    {children}
                </div>
            </>
        );
    }
}

export default BlogLayout;