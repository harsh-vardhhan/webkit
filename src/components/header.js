import {Link} from 'gatsby';
import React from 'react';
import {config} from '../config'

const Header = () => (
    <>
        <div style={{height: 10, background: 'rgb(0, 208, 126)'}}/>
        <div style={{backgroundColor: '#2ecc7112'}}>
            <div className='rcards'>
                <div className='rcard'>
                    <Link
                        to={'/'}
                        style={{color: 'transparent'}}
                    >
                        <h1>{config.siteName}</h1>
                    </Link>
                </div>

                <div className='rcard'>
                    <div className='flex-container'>
                        <Link
                            to={'/blog'}
                            style={{color: 'transparent'}}
                        >
                            <button>{'Blog'}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Header;
