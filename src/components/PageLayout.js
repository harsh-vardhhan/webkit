import React from 'react';
import {rhythm} from '../utils/typography';
import Header from './Header';

class PageLayout extends React.Component {
    render() {
        const {children} = this.props;

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