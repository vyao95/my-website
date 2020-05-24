import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import grouponMerchant from '../assets/experience/groupon-merchant.png';
import groupon from '../assets/experience/groupon.png';
import ucsc from '../assets/experience/ucsc.png';

class Experience extends React.Component {
    constructor(){
        super();
        this.exp = [];
        this.handleScroll = this.handleScroll.bind(this);
        this.isExperienceInView = this.isExperienceInView.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = e => {
        console.log("HEY");
        if(!this.exp || this.exp.length === 0) return;
        this.exp.forEach((ele, index, arr) => {
            if(this.isExperienceInView(ele)) {
                ele.style.visibility = "visible";
                if(index % 2 === 0) {
                    ele.classList.add("fadeInLeft");
                } else {
                    ele.classList.add("fadeInRight");
                }
            }
        });
    }
    isExperienceInView(ele) {
        if(!ele) return false;
        const top = ele.getBoundingClientRect().top + 200;
        return top >= 0 && top <= window.innerHeight;
    }
    render() {
        return (
            <section id="experience">
                <Container>
                    <div className="inner">
                        <Row>
                            <Col className="timeline-header">
                                <h2>My Journey So Far</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="timeline">
                                    <div ref={(el) => this.exp.push(el)} className="experience-1 animated">
                                        <Row>
                                            <div className="story left">
                                                <div className="job">
                                                    <h4>Groupon Merchant</h4>
                                                    <h5>Software Development Engineer I</h5>
                                                    <h6>2019-2020</h6>
                                                </div>
                                            </div>
                                            <div className="event">
                                                <img className="img-circle" src={grouponMerchant}></img>
                                            </div>
                                        </Row>
                                    </div>
                                    <div ref={(el) => this.exp.push(el)} className="experience-2 animated">
                                        <Row>
                                            <div className="story right">
                                                <div className="job">
                                                    <h4>Groupon</h4>
                                                    <h5>Software Engineering Intern</h5>
                                                    <h6>Summer 2018</h6>
                                                </div>
                                                <div className="job-description">
                                                    <p>
                                                        
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="event">
                                                <img className="img-circle" src={groupon}></img>
                                            </div>
                                        </Row>
                                    </div>
                                    <div ref={(el) => this.exp.push(el)} className="experience-3 animated">
                                        <Row>
                                            <div className="story left">
                                                <div className="job">
                                                    <h4>University of California, Santa Cruz</h4>
                                                    <h5>B.S. in Computer Science</h5>
                                                    <h6>2017-2018</h6>
                                                </div>
                                                <div className="job-description">
                                                </div>
                                            </div>
                                            <div className="event">
                                                <img className="img-circle" src={ucsc}></img>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                                <div class="separator"></div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        );
    }
};

export default Experience;