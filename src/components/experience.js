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

        this.stories = [
            {
                title: "Groupon Merchant",
                description: "Software Development Engineer I",
                time: "2019-2020",
                image: grouponMerchant
            },
            {
                title: "Groupon",
                description: "Software Engineering Intern",
                time: "Summer 2018",
                image: groupon
            },
            {
                title: "University of California, Santa Cruz",
                description: "B.S. in Computer Science<",
                time: "2017-2018",
                image: ucsc
            }
        ];
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = e => {
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
                                    {
                                        this.stories.map((story, i) => {
                                            const { title, description, time, image } = story;
                                            const dir = (i % 2 === 0) ? "left" : "right";

                                            return (
                                                <div ref={(el) => this.exp.push(el)} className={`experience-${i} animated`}>
                                                    <Row>
                                                        <div className={`story ${dir}`}>
                                                            <div className="job">
                                                                <h4>{title}</h4>
                                                                <h5>{description}</h5>
                                                                <h6>{time}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="event">
                                                            <img className="img-circle" src={image} alt="grouponMerchant"></img>
                                                        </div>
                                                    </Row>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div className="separator"></div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        );
    }
};

export default Experience;