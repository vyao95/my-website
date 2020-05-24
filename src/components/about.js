import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftStars from '../assets/about/left-stars.svg';
import icon from '../assets/about/icon.svg';
import Typed from 'typed.js';

class About extends React.Component {
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.options = {
            strings: ['Hey, I&apos;m Vince.^1000', 'Software Engineer', 'Web Developer', 'Occasional Designer'],
            startDelay: 1000,
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
        };
    }
    handleScroll = e => {
        // Checks if typed element is in view
        if(!this.el) return;
        const top = this.el.getBoundingClientRect().top;
        if(top >= 0 && top <= window.innerHeight) {
            if(!this.typed) {
                this.typed = new Typed(this.el, this.options);
            }
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (
            <section id="about">
                <div className="bio">
                    <Container>
                        <div className="inner">
                            <Row>
                                <Col xs={4} md={3}>
                                    <img id="left-stars" src={leftStars} alt="leftStars" />
                                </Col>
                                <Col xs={4} md={6} className="center-align">
                                    <div className="icon-container center-align">
                                        <img className="icon" src={icon} alt="icon"/>
                                    </div>
                                </Col>
                                <Col xs={4} md={3}>
                                    <img id="right-stars" src={leftStars} alt="rightStars"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="typed-container center-align">
                                        <span className="typed" ref={(el) => {this.el = el;}}></span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="center-align">
                                <Col>
                                    <p>I'm a Bay Area native, music lover (I could talk about R&amp;B forever), and general cryptocurrency enthusiast.</p>
                                    <p>
                                        I work at Groupon as a software engineer developing web applications but I'll occassionally write an SQL query or Java API.
                                    </p>
                                    <p>
                                        I started this website in my free time to learn more about web design.
                                    </p>
                                </Col>
                            </Row>
                            <div className="separator"></div>           
                        </div>
                    </Container>
                </div>
            </section>
        )
    }
}

export default About;