import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import leftSky from '../assets/landing/left-sky.svg';
import rightSky from '../assets/landing/right-sky.svg';
import starIntro from '../assets/landing/star-intro.svg';
import landscape from '../assets/landing/landscape.svg';

function Landing() {
    return (
        <section id="landing">
            <div className="intro">
                <Container>
                    <div className="inner">
                        <Row>
                            <Col xs={3} md={4}>
                                <img id="left-sky" alt="leftSky" src={leftSky} />
                            </Col>
                            <Col xs={6} md={4} className="center-align">
                                <Row>
                                    <img id="star-intro" alt="I'm Vince" src={starIntro} />
                                </Row>
                                <Row className="justify-content-end">
                                    <div id="intro-text">
                                        <span id="intro-a">a&nbsp;</span>
                                        <span>software engineer</span>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs={3} md={4}>
                                <img id="right-sky" alt="rightSky" src={rightSky} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="landscape">
                <Container>
                    <div className="inner">
                        <Row>
                            <Col>
                                <img id="landscape" alt="landscape" src={landscape} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
        </section>
    );
}

export default Landing;