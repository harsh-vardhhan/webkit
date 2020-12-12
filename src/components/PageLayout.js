import React from 'react';
import {Link} from 'gatsby';

import {rhythm, scale} from '../utils/typography';
import Header from './Header';

class PageLayout extends React.Component {
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
                <h3
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
                </h3>
            );
        }
        return (
            <>
                <Header/>
                <div
                    style={{
                        maxWidth: rhythm(50)
                    }}
                >
                    {children}
                </div>
                <div style={{height: 10, background: 'rgb(0, 208, 126)'}}/>
            </>
        );
    }
}

export default PageLayout;