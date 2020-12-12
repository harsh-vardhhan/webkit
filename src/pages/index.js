import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import PageLayout from '../components/PageLayout';
import SEO from '../components/seo';
import {config} from '../config'
import '../App.css';
require('typeface-rubik');

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Point = styled.h2`
  font-weight: 400;
  font-size: 25px;
  margin-top: 0px;
`;

const Container = styled(FlexCol)`
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;

const IndexPage = () => {
    const [screenWidth, setScreenWidth] = useState('70%');
    const [windowWidth, setWindowWidth] = useState(0);

    let location = {
        pathname: ''
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        location = window.location;
        if (window.innerWidth < 480) {
            setScreenWidth('100%');
        }
    }, []);

    return (
        <PageLayout>
            <SEO
                title={config.head.title}
                description={config.head.description}
            />
            <Container style={{backgroundColor: '#2ecc7112'}}>
                <Banner windowWidth={windowWidth}/>
            </Container>

            <div style={{marginTop: 30}}>
                <Container style={{margin: '0 auto', width: screenWidth}}>
                    <h2 style={{fontSize: '25px', fontWeight: '400', lineHeight: '1.3', textAlign: 'left'}}>
                        <div className='rcards'>
                            <div className='rcard'>
                                <picture>
                                    <img
                                        style={{
                                            width: '80%',
                                            borderImageWidth: '2px',
                                            borderColor: '#00000'
                                        }}
                                        alt='SEO Analyst'
                                        src={require('../images/image1.jpg')}
                                    />
                                </picture>
                            </div>
                            <div className='rcard'>
                                <h2 style={{fontWeight: '600', fontSize: '35px', textAlign: 'left', lineHeight: '1.3'}}>
                                    {config.subHeadingOne}
                                </h2>
                                <Point>{config.subHeadingOneContent}</Point>
                            </div>
                        </div>
                    </h2>
                </Container>
            </div>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <h2 style={{fontSize: '25px', fontWeight: '400', lineHeight: '1.3', textAlign: 'left'}}>
                    <div className='rcards'>
                        <div className='rcard'>
                            <h2 style={{fontWeight: '600', fontSize: '35px', textAlign: 'left', lineHeight: '1.3'}}>
                                {config.subHeadingTwo}
                            </h2>
                            <Point>{config.subHeadingTwoContent}</Point>
                        </div>
                        <div className='rcard'>
                            <picture>
                                <img
                                    style={{
                                        width: '80%',
                                        borderImageWidth: '2px',
                                        borderColor: '#00000'
                                    }}
                                    alt='SEO Analyst'
                                    src={require('../images/image2.jpg')}
                                />
                            </picture>
                        </div>
                    </div>
                </h2>
            </Container>

            <Container style={{margin: '0 auto', width: screenWidth}}>
                <h2 style={{fontSize: '25px', fontWeight: '400', lineHeight: '1.3', textAlign: 'left'}}>
                    <div className='rcards'>
                        <div className='rcard'>
                            <picture>
                                <img
                                    style={{
                                        width: '80%',
                                        borderImageWidth: '2px',
                                        borderColor: '#00000'
                                    }}
                                    alt='SEO Analyst'
                                    src={require('../images/image3.jpg')}
                                />
                            </picture>
                        </div>
                        <div className='rcard'>
                            <h2 style={{fontWeight: '600', fontSize: '35px', textAlign: 'left', lineHeight: '1.3'}}>
                                {config.subHeadingThree}
                            </h2>
                            <Point>{config.subHeadingThreeContent}</Point>
                        </div>
                    </div>
                </h2>
            </Container>

        </PageLayout>
    );
};

const Banner = ({windowWidth}) => {
    if (windowWidth > 480) {
        return (
            <>
                <h1 style={{textAlign: 'center', fontSize: '5vw', lineHeight: '1.5', fontWeight: '600'}}>
                    {config.title}
                </h1>
            </>
        );
    } else {
        return (
            <>
                <h1 style={{fontSize: '9vw', textAlign: 'center', lineHeight: '1.3'}}>
                    {config.title}
                </h1>
            </>
        );
    }
};

export default IndexPage;
