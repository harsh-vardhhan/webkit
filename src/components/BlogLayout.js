import React from 'react';
import Header from './HeaderComponent';

import {rhythm} from '../utils/typography';

class BlogLayout extends React.Component {
    render() {
        const {children} = this.props;

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